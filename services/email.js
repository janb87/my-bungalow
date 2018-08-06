const nodemailer = require('nodemailer');
const email = process.env.EMAIL_USER;

module.exports = {
	sendEmail: ({
		subject,
		html,
		recipients = [process.env.EMAIL_DEFAULT_TO],
	}) => {
		const transporter = nodemailer.createTransport({
			service: process.env.EMAIL_PROVIDER,
			auth: {
				user: email,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: email,
			to: recipients.join(';'),
			subject,
			html,
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				console.log(err);
			} else {
				console.log(info);
			}
		});
	},
};
