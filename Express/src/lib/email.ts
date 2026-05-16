import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY!);
interface SendEmailParams {
  to: string;
  subject: string;
  text: string;
}
export async function sendEmail({ to, subject, text }: SendEmailParams) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      text,
    });
    console.log("Email sent:", response);
  } catch (error) {
    //console.error("Error sending email:", error);
    console.log(JSON.stringify(error, null, 2));
  }
}
