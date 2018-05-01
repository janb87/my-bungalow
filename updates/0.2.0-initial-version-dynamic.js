const keystone = require('keystone');
const Languages = keystone.list('Lang');
const Settings = keystone.list('Settings');
const HomePage = keystone.list('HomePage');
const BungalowPage = keystone.list('BungalowPage');

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
	},
	test: {
		name: 'Start pagina (test)',
		message: 'Welkom',
	},
};

const bungalowPages = {
	nl: {
		name: 'Bungalow pagina (nl)',
		characteristics: '<p>Bungalow info</p>',
		rules: '<p>Huisregels</p>',
	},
	fr: {
		name: 'Bungalow pagina (fr)',
		characteristics: '<p>Bungalow info</p>',
		rules: '<p>Huisregels</p>',
	},
	en: {
		name: 'Bungalow pagina (en)',
		characteristics: '<p>Bungalow info</p>',
		rules: '<p>Huisregels</p>',
	},
	test: {
		name: 'Bungalow pagina (test)',
		characteristics: '<p>Bungalow info</p>',
		rules: '<p>Huisregels</p>',
	},
};

function createNewPages () {
	return new Promise((resolve, reject) => {
		Languages.model.find().exec(async (err, languages) => {
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
				if (bungalowPages[lang.name]) {
					promises.push(
						createBungalowPage({
							...bungalowPages[lang.name],
							language: lang,
						})
					);
				}
			});

			try {
				await Promise.all(promises);
			} catch (error) {
				reject(error);
				return;
			}

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

function createBungalowPage (bungalowPage) {
	return new Promise((resolve, reject) => {
		const newBungalowPage = new BungalowPage.model(bungalowPage);

		newBungalowPage.save(err => {
			if (err) {
				reject(err);
			} else {
				resolve(newBungalowPage);
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
	await createNewPages();
	done();
};
