import nodemailer from 'nodemailer';
import type { APIRoute } from 'astro';

const transporter = nodemailer.createTransport({
  host: 'smtp.protonmail.ch', // Proton Mail's SMTP server
  port: 587, // Use 587 for TLS
  secure: false, // Set to true if using port 465 for SSL
  auth: {
    user: import.meta.env.SMTP_USER, // Your Proton Mail email address
    pass: import.meta.env.SMTP_PASS, // Your Proton Mail SMTP token
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string; // User's email address
    const reason = formData.get('reason') as string;
    const message = formData.get('message') as string;

    // Honeypot validation
    const honeypot = formData.get('honeypot');
    if (honeypot) {
      return new Response('Spam detected. Submission blocked.', { status: 400 });
    }

    // Send email
    await transporter.sendMail({
      from: `"Contact Form" <contact@kinva.net>`, // Fixed "From" address to match your domain
      replyTo: email, // The user's email address for easy replies
      to: 'contact@kinva.net', // Your Proton Mail inbox
      subject: `Kinva ${reason} message from ${name}`, // Subject line
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n\n${message}`, // Email body
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/thankyou', // Redirect to thank-you page
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'There was an error sending your message. Please try again later.',
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};