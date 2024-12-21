import { NextResponse } from 'next/server';
import User from '../../../../models/User'; // Adjust the import path
import connectToDatabase from '../../../../lib/db'; // Adjust the import path

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    // Connect to DB
    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error in signup:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
