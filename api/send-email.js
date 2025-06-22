import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message, phone } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  });

  try {
    await transporter.sendMail({
      from: `<${email}>`,
      to: `${process.env.GMAIL_USER}`, 
      replyTo: email,
      subject: `${subject}`,
      html: `
        <div style="font-family: 'Roboto', sans-serif; line-height: 1.6; color: #333;">
          <p>${message}</p>
          <br>
          <p>Best Regards,</p>
          <p>${name}</p>
          <p>${email}</p>
          ${phone ? `<p>${phone}</p>` : ''}
        </div>
      `,
      text: `
        ${message}

        Best Regards,
        ${name}
        ${email}
        ${phone ? `${phone}` : ''}
      `,
    });

    await transporter.sendMail({
      from: `noreply <${process.env.GMAIL_USER}>`, 
      to: email,
      replyTo: `${process.env.GMAIL_USER}`, 
      subject: `Confirmation: Your Message to Hirakada`,
      html: `
        <div style="font-family: 'Roboto', sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Thank You for Your Message!</h2>
          <p>Dear ${name},</p>
          <p>This is a confirmation that we've received your message. We'll get back to you as soon as possible.</p>
          <p>Below is a copy of the message you sent:</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <h3 style="color: #0056b3;">Your Message Details:</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 0.9em; color: #777;">
            Please do not reply to this email directly. If you need to send another message, please visit our contact page or reply to <a href="mailto:${process.env.GMAIL_USER}">${process.env.GMAIL_USER}</a>.
          </p>
          <p style="font-size: 0.9em; color: #777;">
            Best regards,<br>
            Hirakada
          </p>
        </div>
      `,
      text: `
        Thank You for Your Message!

        Dear ${name},

        This is a confirmation that we've received your message. We'll get back to you as soon as possible.

        Below is a copy of the message you sent:

        Subject: ${subject}
        Message:
        ${message}

        Please do not reply to this email directly. If you need to send another message, please visit our contact page or reply to ${process.env.GMAIL_USER}.

        Best regards,
        Hirakada
      `,
    });

    res.status(200).json({ message: 'Messages sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}