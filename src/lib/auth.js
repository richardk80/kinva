import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { auth } from './firebase'; // Assuming your Firebase configuration is here
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialize LibSQL client for Turso
const libsql = createClient({
  url: 'libsql://kinva-richardk80.turso.io', // Turso connection string
  authToken: import.meta.env.TURSO_AUTH_TOKEN, // Optional: Authentication token for Turso
});

const adapter = new PrismaLibSQL(libsql);

// Pass the LibSQL client to Prisma
const prisma = new PrismaClient({ adapter });

// Sign-up function
export const signUp = async (email, password, name = null) => {
  try {
    // Step 1: Create a user in Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    console.log('Firebase user created:', firebaseUser.uid);

    // Step 2: Save the user in Turso via Prisma
    const newUser = await prisma.user.create({
      data: {
        firebaseId: firebaseUser.uid,
        email: firebaseUser.email,
        name, // This should not be null if correctly passed
      },
    });
    console.log('New User:', newUser);

    return newUser;
  } catch (error) {
    console.error('Sign-up error:', error.message);
    throw new Error('Failed to sign up');
  }
};

// Sign-in function
export const signIn = async (email, password) => {
  try {
    // Authenticate the user with Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    console.log('Firebase user signed in:', firebaseUser.uid);

    // Retrieve the user from Turso via Prisma
    const user = await prisma.user.findUnique({
      where: { firebaseId: firebaseUser.uid },
    });

    if (!user) {
      throw new Error('User not found in the database.');
    }

    return user;
  } catch (error) {
    console.error('Sign-in error:', error.message);
    throw new Error('Failed to sign in');
  }
};

export const getUser = () => {
  const user = auth.currentUser; // Get the current authenticated user
  if (user) {
    return {
      uid: user.uid,         // Firebase user ID
      email: user.email,     // User's email address
      name: user.name || null, // User's name (if available)
    };
  }
  return null; // Return null if no user is logged in
};

// Sign-out function
export const logOut = async () => {
  try {
    console.log('Auth instance:', auth); // Debug
    console.log('SignOut function:', signOut); // Debug

    await signOut(auth); // Log out using the Firebase auth instance
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Sign-out error:', error.message); // Log error
    throw new Error('Failed to sign out');
  }
};