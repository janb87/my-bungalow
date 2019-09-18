const keystone = require('keystone');
const Languages = keystone.list('Lang');
const HomePage = keystone.list('HomePage');

const homePages = {
	nl: {
		buttonText: 'Neem een kijkje',
	},
	fr: {
		buttonText: 'Neem een kijkje',
	},
	en: {
		buttonText: 'Have a look inside',
	},
	test: {
		buttonText: 'Neem een kijkje',
	},
};

function updateHomePages () {
	return new Promise((resolve, reject) => {
		Languages.model.find().exec(async (err, languages) => {
			if (err) {
				throw err;
			}

			const promises = [];
			languages.forEach(lang => {
				if (homePages[lang.name]) {
					promises.push(
						updatePage(lang.id, homePages[lang.name])
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

function updatePage (languageId, model) {
	return new Promise((resolve, reject) => {
		HomePage.model.findOne({ language: languageId }).exec((err, page) => {
			if (err) {
				reject(err);
				return;
			}

			for (let [key, value] of Object.entries(model)) {
				page[key] = value;
			}

			page.save(saveErr => {
				if (saveErr) {
					reject(saveErr);
					return;
				}
				resolve(page);
			});
		});	
	});
}

exports = module.exports = async function (done) {
	await updateHomePages();
	done();
};
