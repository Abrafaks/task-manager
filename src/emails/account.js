const sgMail = require("@sendgrid/mail");
const sendgripAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgripAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abrafakspl@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abrafakspl@gmail.com",
    subject: "Your cancellation!",
    text: `Hello, ${name}. Let us know if there is anything we could have done to have kept you on board.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
