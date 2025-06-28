import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  });

  return new Response("Email enviado com sucesso", { status: 200 });
}
