import nodemailer from 'nodemailer';
import type { APIRoute } from 'astro';

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: import.meta.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const reason = formData.get('reason') as string;
    const message = formData.get('message') as string;

    // Honeypot validation
    const honeypot = formData.get('honeypot');
    if (honeypot) {
      return new Response('Spam detected. Submission blocked.', { status: 400 });
    }

    console.log('Processing form submission:', { name, email, reason, message });

    await transporter.sendMail({
      from: `"Kinva Contact Form" <${import.meta.env.SMTP_USER}>`, // Align with your SMTP user
      to: '',
      replyTo: `${email}`, // Ensures responses go to the sender
      subject: `Kinva ${reason} message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\nMessage:\n${message}`,
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/thankyou',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};