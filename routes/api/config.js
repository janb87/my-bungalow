const { getTranslations } = require('../../services/translations');
const { getSettings } = require('../../services/settings');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		if (!lang) {
			throw new Error('Language parameter is not set');
		}
		const [translations, settings] = await Promise.all([
			getTranslations(lang),
			getSettings(),
		]);
		res.json({
			translations,
			settings: {
				...settings,
				headerBackgroundImage:
					settings.headerBackgroundImage.secure_url || '/img/home-banner.jpg',
			},
		});
	} catch (err) {
		next(err);
	}
};
