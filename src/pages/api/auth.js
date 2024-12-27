// src/pages/api/auth.js
import { signUp, signIn, getUser } from '../../lib/auth';

export async function POST({ request, cookies }) {
  try {
    const { action, email, password, name } = await request.json();
    console.log('Sign-up/sign-in payload:', { action, email, password, name });

    let user;

    if (action === 'signup') {
      // Sign-up logic
      user = await signUp(email, password, name);
    } else if (action === 'signin') {
      // Sign-in logic
      user = await signIn(email, password);
    } else {
      return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
    }

    // Set a cookie with user data or token after successful authentication
    cookies.set('user', JSON.stringify({
      id: user.id,
      email: user.email,
      name: user.name,
    }), {
      path: '/',         // Cookie is available across the site
      httpOnly: true,    // Cookie is not accessible to JavaScript
      secure: true,      // Cookie is sent only over HTTPS
      maxAge: 0
    });

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.error('Sign-up/sign-in error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE({ cookies }) {
  try {
    cookies.delete('user', { path: '/' }); // Delete the user cookie
    return new Response(JSON.stringify({ message: 'Logged out successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting cookie:', error.message);
    return new Response(JSON.stringify({ error: 'Failed to log out' }), { status: 500 });
  }
}

export async function GET() {
  const user = getUser();
  if (user) {
    return new Response(JSON.stringify({ user }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: 'No user signed in' }), { status: 401 });
  }
}
