const keystone = require('keystone');
const Languages = keystone.list('Lang');
const Settings = keystone.list('Settings');
const HomePage = keystone.list('HomePage');
const BungalowPage = keystone.list('BungalowPage');
const ParkPage = keystone.list('ParkPage');

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

const parkPages = {
	nl: {
		name: 'Park pagina (nl)',
		intro: '<p>Park info</p>',
		accomodations: '<p>Accomodaties</p>',
	},
	fr: {
		name: 'Park pagina (fr)',
		intro: '<p>Park info</p>',
		accomodations: '<p>Accomodaties</p>',
	},
	en: {
		name: 'Park pagina (en)',
		intro: '<p>Park info</p>',
		accomodations: '<p>Accomodaties</p>',
	},
	test: {
		name: 'Park pagina (test)',
		intro: '<p>Park info</p>',
		accomodations: '<p>Accomodaties</p>',
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
						createPage({
							...homePages[lang.name],
							language: lang,
						}, HomePage)
					);
				}
				if (bungalowPages[lang.name]) {
					promises.push(
						createPage({
							...bungalowPages[lang.name],
							language: lang,
						}, BungalowPage)
					);
				}
				if (parkPages[lang.name]) {
					promises.push(
						createPage({
							...parkPages[lang.name],
							language: lang,
						}, ParkPage)
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

function createPage (model, instance) {
	return new Promise((resolve, reject) => {
		const newPage = new instance.model(model);

		newPage.save(err => {
			if (err) {
				reject(err);
			} else {
				resolve(newPage);
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
