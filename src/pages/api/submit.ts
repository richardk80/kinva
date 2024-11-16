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
    const hcaptchaResponse = formData.get('h-captcha-response') as string; // Retrieve hCaptcha response token

    if (!hcaptchaResponse) {
      return new Response(JSON.stringify({
        success: false,
        message: 'CAPTCHA not completed. Please check the box.',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify hCaptcha response with their API
    const captchaVerifyResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: import.meta.env.HCAPTCHA_SECRET_KEY, // Your hCaptcha secret key
        response: hcaptchaResponse, // hCaptcha response from the form
      }),
    });

    const captchaResult = await captchaVerifyResponse.json();

    if (!captchaResult.success) {
      return new Response(JSON.stringify({
        success: false,
        message: 'CAPTCHA verification failed. Please try again.',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Validate if the SMTP server allows dynamic 'from' addresses
      to: 'contact@himoot.site', // Your recipient address (could be your Gmail)
      subject: `Kinva ${reason} Message from ${name}`, // Subject line
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