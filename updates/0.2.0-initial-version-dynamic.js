const keystone = require('keystone');
const Languages = keystone.list('Lang');
const Settings = keystone.list('Settings');
const HomePage = keystone.list('HomePage');

const homePages = {
	nl: {
		name: 'Start pagina (nl)',
		message: 'Even tot rust komen in de prachtige omgeving van Durbuy',
	},
	fr: {
		name: 'Start pagina (fr)',
		message: 'Bienvenue',
	},
	en: {
		name: 'Start pagina (en)',
		message: 'Welcome',
		language: 'en',
	},
	test: {
		name: 'Start pagina (test)',
		message: 'Welkom',
		language: 'test',
	},
};

function createNewHomePages () {
	return new Promise((resolve, reject) => {
		Languages.model.find().exec((err, languages) => {
			if (err) {
				throw err;
			}

			const promises = [];
			languages.forEach(lang => {
				if (homePages[lang.name]) {
					promises.push(
						createHomePage({
							...homePages[lang.name],
							language: lang,
						})
					);
				}
			});

			resolve();
		});
	});
}

function createHomePage (homePage) {
	return new Promise((resolve, reject) => {
		const newHomePage = new HomePage.model(homePage);

		newHomePage.save(err => {
			if (err) {
				reject(err);
			} else {
				resolve(newHomePage);
			}
		});
	});
}

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
	await createNewHomePages();
	done();
};