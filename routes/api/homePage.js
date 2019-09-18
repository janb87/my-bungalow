const { getLang } = require('../../services/lang');
const { getHomePage } = require('../../services/homePage');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		const { languageId } = req.query;
		if (!lang && !languageId) {
			throw new Error('Language parameter is not set');
		}
		const langModel = languageId ? { id: languageId } : await getLang(lang);
		const homePage = await getHomePage(langModel.id);
		const { message, backgroundImage, buttonText } = homePage;
		res.json({
			message,
			backgroundImage: backgroundImage.secure_url || '/img/home-banner.jpg',
			buttonText,
		});
	} catch (err) {
		next(err);
	}
};
