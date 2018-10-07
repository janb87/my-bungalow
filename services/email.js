const nodemailer = require('nodemailer');
const email = process.env.EMAIL_USER;
const isDev = process.env.NODE_ENV !== 'production';

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: Number(process.env.EMAIL_PORT),
	authMethod: process.env.EMAIL_AUTH_METHOD || 'LOGIN',
	auth: {
		user: email,
		pass: process.env.EMAIL_PASSWORD,
	},
	logger: isDev,
	debug: isDev,
});

module.exports = {
	sendEmail: ({
		subject,
		html,
		recipients = [process.env.EMAIL_DEFAULT_TO],
	}) => {

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
