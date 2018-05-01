const keystone = require('keystone');
const BungalowPage = keystone.list('BungalowPage');
const { PAGE_NOT_FOUND } = require('../constants/errors');

function getBungalowPage (languageId) {
	return new Promise((resolve, reject) => {
		BungalowPage.model.findOne({ language: languageId }).exec((err, page) => {
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
	getBungalowPage,
};
