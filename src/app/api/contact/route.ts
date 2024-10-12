import { NextResponse } from "next/server";
import sendContactEmail from "@/helper/sendEmail"; // Your email sending logic

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Validate incoming data
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
  }

  try {
    // Send the email using your custom email sending function
    await sendContactEmail(name, email, message);

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, error:error , message:"Failed to send message."  }, { status: 500 });
  }
}
