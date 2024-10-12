import { resend } from "@/lib/resend";
import ContactEmailTemplate from "@/components/Email/templeteEmial"; 

export default async function sendContactFormEmail(
  senderName: string,
  senderEmail: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["codewithsaffy@gmail.com"], 
      subject: `New Contact Form Submission from ${senderName}`,
      react: ContactEmailTemplate({ senderName, senderEmail, message }),
    });

    return { success: true, message: `Message sent from: ${senderEmail}` };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message",
      error: error,
    };
  }
}
