import { PAYMENT_STRIPE_WEBHOOK_SECRET, SECRET_STRIPE_KEY } from '$env/static/private';
import { InsertPayment } from "$lib/server/queries";
import { error, json } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(SECRET_STRIPE_KEY)

// endpoint to handle incoming payment webhooks
export async function POST({ request }) {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')
    let event

    try {
        event = stripe.webhooks.constructEvent(body, signature, PAYMENT_STRIPE_WEBHOOK_SECRET)
    } catch (err) {
        console.warn('⚠️  Webhook signature verification failed.', err.message)
        throw error(400, 'Invalid request')
    }

    if (event.type == 'charge.succeeded') {
        const charge = event.data.object;

        // Create payment obejct from Stripe charge object
        const payment = {
            email: charge.billing_details?.email,
            paymentId: charge.id,
            created: new Date(charge.created * 1000),
        }

        // Create payment record in supabase db
        await InsertPayment(payment);

        console.log(`✅ Charge succeeded ${charge.id}`)
    }
    return json()
}