const keystone = require('keystone');
const Settings = keystone.list('Settings');

function getSettings () {
	return new Promise((resolve, reject) => {
		Settings.model.findOne().exec((err, settings) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(settings);
		});
	});
}

module.exports = {
	getSettings,
};
