const contactService = require('../../services/contact');
const { sendEmail } = require('../../services/email');

const submitForm = async (req, res, next) => {
	try {
		const newContact = await contactService.submitForm(req.body);
		sendEmail({
			subject: 'Nieuw bericht ontvangen',
			html: '<p>Er is een nieuw bericht gepost op de contact pagina:</p>'
				+ `<p><strong>Naam:</strong> ${newContact.name}</p>`
				+ `<p><strong>Email:</strong> ${newContact.email}</p>`
				+ `<p><strong>Bericht:</strong> ${newContact.message}</p>`,
		});
		return res.json(newContact);
	} catch (err) {
		next(err);
	}
};

module.exports = { submitForm };
