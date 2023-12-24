import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import { join } from "path";

const handler = async (req, res) => {
  const { name, email, subject, message } =
    req.body;

  if (req.method !== "POST") {
    return res.status(401).json({ message: "Forbidden!" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: join(process.cwd(), "/emails/"),
      defaultLayout: false,
    },
    viewPath: join(process.cwd(), "/emails/"),
  };

  transporter.use("compile", hbs(handlebarOptions));

  const mailOptions = {
    from: `Portfolio Contact Form <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    template: "contact",
    subject: `${subject}`,
    context: {
      name,
      email,
      subject,
      message,
    },
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message was sent!" });
  } catch (err) {
    const error = err;
    res.status(500).json({ message: error.message });
  }
};

export default handler;
