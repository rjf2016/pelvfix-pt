import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

const ContactFormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  message: z.string().min(1),
  referrals: z.array(z.string()),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { success, data } = ContactFormSchema.safeParse(json);

    if (!success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const msg = {
      to: process.env.CONTACT_EMAIL as string,
      from: process.env.CONTACT_EMAIL as string,
      subject: `PelvFix Contact Form`,
      text: `
        Full Name: ${data.fullName}
        Email: ${data.email}
        Phone Number: ${data.phoneNumber}
        Referrals: ${data.referrals.join(', ')}

        Message: ${data.message}
      `,
    };
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }
}
