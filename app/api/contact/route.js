// app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const { name, email, subject, website, message } = data;

  // Basic validation
  if (!name || !email || !website || !message) {
    return NextResponse.json({ error: 'All required fields must be filled out.' }, { status: 400 });
  }

  // Process the form data (e.g., send email)
  // For demonstration, we'll just log the data
  console.log({ name, email, subject, website, message });

  // Respond with success message
  return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
}
