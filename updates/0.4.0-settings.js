const keystone = require('keystone');
const Languages = keystone.list('Lang');
const Settings = keystone.list('Settings');

function createSettings () {
	return new Promise((resolve, reject) => {
		Languages.model.findOne({ name: 'nl' }).exec((err, nlLanguage) => {
			const settings = new Settings.model({
				name: 'Settings',
				defaultLanguage: nlLanguage,
			});

			settings.save(err => {
				if (err) {
					reject(err);
				} else {
					resolve(settings);
				}
			});
		});
	});
}

exports = module.exports = async function (done) {
	await createSettings();
	done();
};
