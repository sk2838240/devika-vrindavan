import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECEIVER_EMAIL = process.env.CONTACT_EMAIL || "info@whitebutter.com";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"White Butter Residences" <${process.env.SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact from ${name} — White Butter Residences`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FBF7F0; border: 1px solid rgba(139,74,43,0.3);">
          <h2 style="color: #6E3A22; font-size: 22px; margin-bottom: 24px; letter-spacing: 0.04em;">
            New Contact Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #8B4A2B; font-weight: 600; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #3A2A1E;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B4A2B; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #3A2A1E;"><a href="mailto:${email}" style="color: #6E3A22;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B4A2B; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #3A2A1E;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B4A2B; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #3A2A1E; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
