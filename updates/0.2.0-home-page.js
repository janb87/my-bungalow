const keystone = require('keystone');
const Languages = keystone.list('Lang');
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

exports = module.exports = async function (done) {
	await createNewHomePages();
	done();
};
