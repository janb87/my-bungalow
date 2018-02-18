const keystone = require('keystone');
const Contact = keystone.list('Contact');

module.exports = {
	submitForm: ({ name, email, message }) => {
		return new Promise((resolve, reject) => {
			const newContact = new Contact.model({
				name,
				email,
				message,
			});
			newContact.save(err => {
				if (err) {
					reject(err);
					return;
				}
				resolve(newContact);
			});
		});
	},
};
