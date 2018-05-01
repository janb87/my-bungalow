const keystone = require('keystone');
const Gallery = keystone.list('Gallery');
const { GALLERY_NOT_FOUND } = require('../constants/errors');

function getGalleryById (galleryId) {
	return new Promise((resolve, reject) => {
		Gallery.model.findById(galleryId).exec((err, language) => {
			if (err) {
				reject(err);
				return;
			}
			if (!language) {
				reject(new Error(GALLERY_NOT_FOUND));
				return;
			}
			resolve(language);
		});
	});
}

module.exports = {
	getGalleryById,
};
