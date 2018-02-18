const keystone = require('keystone');
const Languages = keystone.list('Lang');
const { LANGUAGE_NOT_FOUND } = require('../constants/errors');

function getLang (lang) {
	return new Promise((resolve, reject) => {
		Languages.model.findOne({ name: lang }).exec((err, language) => {
			if (err) {
				reject(err);
				return;
			}
			if (!language) {
				reject(new Error(LANGUAGE_NOT_FOUND));
				return;
			}
			resolve(language);
		});
	});
}

function getLangById (languageId) {
	return new Promise((resolve, reject) => {
		Languages.model.findById(languageId).exec((err, language) => {
			if (err) {
				reject(err);
				return;
			}
			if (!language) {
				reject(new Error(LANGUAGE_NOT_FOUND));
				return;
			}
			resolve(language);
		});
	});
}

module.exports = {
	getLang,
	getLangById,
};
