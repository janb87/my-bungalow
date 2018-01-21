const keystone = require('keystone');
const Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	const newEnquiry = new Enquiry.model();
	const updater = newEnquiry.getUpdateHandler(req);

	updater.process(
		req.body,
		{
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		},
		(err) => {
			if (err) {
				return res.json({
					err,
				});
			} else {
				return res.json({
					success: true,
				});
			}
		}
	);
};
