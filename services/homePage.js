const keystone = require('keystone');
const HomePage = keystone.list('HomePage');
const { PAGE_NOT_FOUND } = require('../constants/errors');

function getHomePage (languageId) {
	return new Promise((resolve, reject) => {
		HomePage.model.findOne({ language: languageId }).exec((err, homePage) => {
			if (err) {
				reject(err);
				return;
			}
			if (!homePage) {
				reject(new Error(PAGE_NOT_FOUND));
				return;
			}
			resolve(homePage);
		});
	});
}

module.exports = {
	getHomePage,
};
