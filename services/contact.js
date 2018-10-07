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
			const newContact = new Contact.model({
				name,
				email,
				message,
			});

			if (!isValidEmail(email)) {
				const emailError = createValidationError({
					email: {
						kind: 'invalid-email',
						path: 'email',
						message: 'Path `email` is invalid.',
					},
				});
				return newContact.validate((err) => {
					if (!err) {
						return reject(emailError);
					}
					reject({
						...err,
						...emailError,
						errors: {
							...err.errors,
							...emailError.errors,
						},
					});
				});
			}

			newContact.save(err => {
				if (err) {
					return reject(err);
				}
				return resolve(newContact);
			});
		});
	},
};
