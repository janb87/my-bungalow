const { getTranslations } = require('../../services/translations');
const { getSettings } = require('../../services/settings');
const { getLangById } = require('../../services/lang');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		let translations;
		let settings;
		if (!lang) {
			settings = await getSettings();
			translations = await getTranslations(settings.defaultLanguage);
		} else {
			[translations, settings] = await Promise.all([
				getTranslations(lang),
				getSettings(),
			]);
		}
		const { name } = await getLangById(settings.defaultLanguage);

		res.json({
			translations,
			settings: {
				defaultLanguage: name,
			},
		});
	} catch (err) {
		next(err);
	}
};
