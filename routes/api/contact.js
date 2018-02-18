const contactService = require('../../services/contact');

const submitForm = async (req, res, next) => {
	try {
		const newContact = await contactService.submitForm(req.body);
		return res.json(newContact);
	} catch (err) {
		next(err);
	}
};

module.exports = { submitForm };
