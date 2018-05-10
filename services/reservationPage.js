const keystone = require('keystone');
const ReservationPage = keystone.list('ReservationPage');
const { PAGE_NOT_FOUND } = require('../constants/errors');

function getReservationPage (languageId) {
	return new Promise((resolve, reject) => {
		ReservationPage.model.findOne({ language: languageId }).exec((err, page) => {
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
	getReservationPage,
};
