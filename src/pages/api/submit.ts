import nodemailer from 'nodemailer';
import type { APIRoute } from 'astro';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your custom domain's SMTP server
  port: 587, // Replace with appropriate port (587 for TLS, 465 for SSL)
  secure: false, // Use SSL (true) or TLS (false)
  auth: {
    user: import.meta.env.SMTP_USER, // Use environment variables for security
    pass: import.meta.env.SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const reason = formData.get('reason') as string;
    const message = formData.get('message') as string;

    await transporter.sendMail({
      from: `${email}`, // The custom domain email address
      to: 'contact@himoot.site', // Your recipient address (could be your Gmail)
      subject: `Hi Moot ${reason} Message from ${name}`, // Subject line
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n\n${message}`, // Email body
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/thankyou', // Redirect to thank-you page after success
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