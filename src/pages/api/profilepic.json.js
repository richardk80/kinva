const profilepic = true;

export async function GET() {
    return new Response(JSON.stringify(profilepic), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

export default profilepic;