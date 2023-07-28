const nodemailer = require("nodemailer");
const { NODE_PASS } = process.env;

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "anytest@meta.ua",
      pass: NODE_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: '"register letter 👻" <anytest@meta.ua>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    html: data.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
