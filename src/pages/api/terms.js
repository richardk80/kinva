const queryterm = "birthday";

  export async function GET() {
    return new Response(JSON.stringify(queryterm), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

export default queryterm;