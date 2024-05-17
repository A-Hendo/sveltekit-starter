import { SECRET_STRIPE_KEY } from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(SECRET_STRIPE_KEY)

export const load = async () => {
    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: [
            {
                // Product price
                price: 'price_1P5nmOBgC43P227csZgPIrBF',
                quantity: 1,
            },
        ],
        mode: 'payment',
        redirect_on_completion: "never",
    })

    return {
        clientSecret: session.client_secret
    }
}