import { eq } from 'drizzle-orm';
import { db } from './db';
import { payments, type paymentsInsert, type paymentsSelect } from './schema';


// Payment Queries
export async function InsertPayment(data: paymentsInsert) {
    await db.insert(payments).values(data);
}

export async function GetPaymentByEmail(email: paymentsSelect['email']): Promise<
    Array<{
        id: string;
        email: string;
        paymentId: string;
        created: Date;
    }>
> {
    return db.select().from(payments).where(eq(payments.email, email));
}
