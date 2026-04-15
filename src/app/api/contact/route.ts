import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, message, company } = body;

    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email,
      react: EmailTemplate({ firstName, lastName, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
