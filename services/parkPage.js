const keystone = require('keystone');
const ParkPage = keystone.list('ParkPage');
const { PAGE_NOT_FOUND } = require('../constants/errors');

function getParkPage (languageId) {
	return new Promise((resolve, reject) => {
		ParkPage.model.findOne({ language: languageId }).exec((err, page) => {
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
	getParkPage,
};
