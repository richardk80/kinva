import crypto from 'crypto';

export async function onRequest(context, next) {
  // Generate a random nonce
  const nonce = crypto.randomBytes(16).toString('base64');

  // Pass nonce to the response headers
  const response = await next(context);

  response.headers.set(
    'Content-Security-Policy',
    `script-src 'self' 'nonce-${nonce}' https://hcaptcha.com https://*.hcaptcha.com`
  );

  // Attach the nonce to the context so it can be passed to the page
  context.locals = { nonce };

  return response;
}