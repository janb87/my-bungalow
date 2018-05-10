const { getLang } = require('../../services/lang');
const { getNearbyPage } = require('../../services/nearbyPage');
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
		const nearbyPage = await getNearbyPage(langModel.id);
		const { galleryId, content } = nearbyPage;
		let gallery;
		try {
			gallery = await getGalleryById(galleryId);
		} catch (galleryError) {
			if (galleryError.message === GALLERY_NOT_FOUND) {
				gallery = { images: [] };
			} else {
				throw galleryError;
			}
		}
		res.json({
			content,
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
