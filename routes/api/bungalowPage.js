const { getLang } = require('../../services/lang');
const { getBungalowPage } = require('../../services/bungalowPage');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		const { languageId } = req.query;
		if (!lang && !languageId) {
			throw new Error('Language parameter is not set');
		}
		const langModel = languageId ? { id: languageId } : await getLang(lang);
		const homePage = await getBungalowPage(langModel.id);
		const { groundPlanImage, images, ...homePageProps } = homePage;
		res.json({
			...homePageProps,
			groundPlanImage: groundPlanImage.secure_url,
			images: images.map((image) => image.secure_url),
		});
	} catch (err) {
		next(err);
	}
};
