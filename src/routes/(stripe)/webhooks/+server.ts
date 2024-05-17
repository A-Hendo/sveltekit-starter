import { AUTH_RESEND_KEY, PAYMENT_STRIPE_WEBHOOK_SECRET, RESEND_AUDIENCE_ID, SECRET_STRIPE_KEY } from '$env/static/private';
import { InsertPayment } from "$lib/server/queries";
import { error, json } from '@sveltejs/kit';
import { Resend } from "resend";
import Stripe from 'stripe';
import { emailMarketing } from '../../../supakit.config';

const stripe = new Stripe(SECRET_STRIPE_KEY)
const resend = new Resend(AUTH_RESEND_KEY)

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

    if (event.type === 'charge.succeeded') {
        // User successfully paid, provide access your service
        const charge = event.data.object;

        // Create payment obejct from Stripe charge object
        const payment = {
            email: charge.billing_details?.email,
            paymentId: charge.id,
            created: new Date(charge.created * 1000),
        }

        // Creates a payment record in the supabase db
        await InsertPayment(payment);

        console.log(`✅ Charge succeeded ${charge.id}`)

        // Add email to Resend contacts
        if (emailMarketing) {
            const names = charge.billing_details.name?.split(" ");
            const response = await resend.contacts.create({
                email: payment.email,
                firstName: names ? names.slice(0, -1).join(" ") : "",
                lastName: names ? names.at(-1) : "",
                unsubscribed: false,
                audienceId: RESEND_AUDIENCE_ID,
            })

            if (response.error)
                console.log(response);
        }
    }
    else if (event.type === "invoice.payment_failed") {
        // Payment failed (usually subscription), send an email and potentially revoke their access
    }
    else if (event.type === "customer.subscription.deleted") {
        // Subscription was canceled by the user - revoke their access
    }
    return json()
}