const keystone = require('keystone');
const Translations = keystone.list('Translations');

function getTranslations (lang) {
	return new Promise((resolve, reject) => {
		Translations.model
			.find({})
			.select(
				`name isHtml translation_nl_html translation_nl translation_${lang} translation_${lang}_html`
			)
			.exec((err, translations) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(
					translations.map(translation => {
						// Nl is the fallback language
						let value;
						if (translation.isHtml === true) {
							value
								= translation[`translation_${lang}_html`]
								|| translation[`translation_nl_html`];
						} else {
							value
								= translation[`translation_${lang}`]
								|| translation[`translation_nl`];
						}
						return {
							name: translation.name,
							value,
						};
					})
				);
			});
	});
}

module.exports = {
	getTranslations,
};
