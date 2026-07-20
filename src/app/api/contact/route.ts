import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKIOknQVQldpu68sqVfDBbYfoKf0SDv9SbqXx6Muw0azEb3l727s3zaFBn5OKsyX-Jsw/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script (server-to-server, no CORS issue)
    const sheetRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (sheetRes.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await sheetRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error || "Failed to save lead." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}