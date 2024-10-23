const loggedin = true;

export async function GET() {
    return new Response(JSON.stringify(loggedin), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

export default loggedin;