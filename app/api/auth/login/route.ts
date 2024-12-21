import { NextResponse } from 'next/server';
import User from '../../../../models/User'; // Adjust the import path
import connectToDatabase from '../../../../lib/db'; // Adjust the import path

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Connect to DB
    await connectToDatabase();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Error in login:', error);
    return NextResponse.json({ error: 'Error during login' }, { status: 500 });
  }
}
