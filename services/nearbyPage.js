const keystone = require('keystone');
const NearbyPage = keystone.list('NearbyPage');
const { PAGE_NOT_FOUND } = require('../constants/errors');

function getNearbyPage (languageId) {
	return new Promise((resolve, reject) => {
		NearbyPage.model.findOne({ language: languageId }).exec((err, page) => {
			if (err) {
				reject(err);
				return;
			}
			if (!page) {
				reject(new Error(PAGE_NOT_FOUND));
				return;
			}
			resolve(page);
		});
	});
}

module.exports = {
	getNearbyPage,
};
