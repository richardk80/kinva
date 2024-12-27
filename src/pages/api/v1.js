import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

// Initialize LibSQL client for Turso
const libsql = createClient({
  url: 'libsql://kinva-richardk80.turso.io', // Turso connection string
  authToken: import.meta.env.TURSO_AUTH_TOKEN, // Optional: Authentication token for Turso
});

const adapter = new PrismaLibSQL(libsql);

// Pass the LibSQL client to Prisma
const prisma = new PrismaClient({ adapter });

// Handle GET request (retrieve all users)
export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Fetch users from the Prisma database
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);  // Log error
    return new Response(
      JSON.stringify({ error: 'Error fetching users' }),
      { status: 500 }
    );
  }
}

// Handle POST request (create a new user)
export async function POST({ request }) {
  const { firebaseId, email, name } = await request.json(); // Get data from the request body
  
  try {
    const user = await prisma.user.create({ // Create user in the Prisma database
      data: {
        firebaseId,
        email,
        name,
      },
    });
    
    return new Response(JSON.stringify(user), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);  // Log error
    return new Response(
      JSON.stringify({ error: 'Error creating user' }),
      { status: 500 }
    );
  }
}