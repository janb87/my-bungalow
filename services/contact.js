const keystone = require('keystone');
const Contact = keystone.list('Contact');
const isValidEmail = require('../utils/isValidEmail');
const createValidationError = require('../utils/createValidationError');

module.exports = {
	submitForm: ({
		name,
		email,
		message,
	}) => {
		return new Promise((resolve, reject) => {
			if (!isValidEmail(email)) {
				const error = createValidationError({
					email: {
						kind: 'invalid-email',
						path: 'email',
						message: 'Path `email` is invalid.',
					},
				});
				return reject(error);
			}

			const newContact = new Contact.model({
				name,
				email,
				message,
			});
			newContact.save(err => {
				if (err) {
					return reject(err);
				}
				return resolve(newContact);
			});
		});
	},
};
