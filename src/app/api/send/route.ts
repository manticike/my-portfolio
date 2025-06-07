import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type safety for request body
interface EmailRequest {
  name: string;
  email: string;
  message: string;
}
export async function POST(request: Request) {
  // Validate config first
  if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.error('Email server not configured');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  let parsedBody;
  try {
    parsedBody = await request.json();
  } catch (e) {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  const { name, email, message } = parsedBody;

  // Validate input
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

const info = await transporter.sendMail({
  from: `"Contact Form" <${process.env.EMAIL_FROM}>`,
  to: process.env.EMAIL_TO,
  subject: `New message from ${name}`,
  text: `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px;">
      <h2 style="color: #2563eb;">New Contact Form Submission</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; width: 100px;"><strong>Name:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">
            <a href="mailto:${email}">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Message:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px; color: #6b7280; font-size: 0.9em;">
        Sent from your website contact form
      </p>
    </div>
  `,
});

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}