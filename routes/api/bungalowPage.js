const { getLang } = require('../../services/lang');
const { getBungalowPage } = require('../../services/bungalowPage');
const { getGalleryById } = require('../../services/gallery');
const { GALLERY_NOT_FOUND } = require('../../constants/errors');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		const { languageId } = req.query;
		if (!lang && !languageId) {
			throw new Error('Language parameter is not set');
		}
		const langModel = languageId ? { id: languageId } : await getLang(lang);
		const bungalowPage = await getBungalowPage(langModel.id);
		const { groundPlanImage, images, characteristics, rules } = bungalowPage;
		let gallery;
		try {
			gallery = await getGalleryById(images);
		} catch (galleryError) {
			if (galleryError.message === GALLERY_NOT_FOUND) {
				gallery = { images: [] };
			} else {
				throw galleryError;
			}
		}
		res.json({
			characteristics,
			rules,
			groundPlanImage: groundPlanImage.secure_url,
			images: gallery.images.map(image => ({
				url: image.secure_url,
				width: image.width,
				height: image.height,
			})),
		});
	} catch (err) {
		next(err);
	}
};
