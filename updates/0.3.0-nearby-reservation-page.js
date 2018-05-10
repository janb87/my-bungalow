const keystone = require('keystone');
const Languages = keystone.list('Lang');
const NearbyPage = keystone.list('NearbyPage');
const ReservationPage = keystone.list('ReservationPage');

const nearbyPages = {
	nl: {
		name: 'In de omgeving pagina (nl)',
		content: '<p>Tekst</p>',
	},
	fr: {
		name: 'In de omgeving pagina (fr)',
		content: '<p>Tekst</p>',
	},
	en: {
		name: 'In de omgeving pagina (en)',
		content: '<p>Tekst</p>',
	},
	test: {
		name: 'In de omgeving pagina (test)',
		content: '<p>Tekst</p>',
	},
};

const reservationPages = {
	nl: {
		name: 'Reservatie pagina (nl)',
		content: '<p>Tekst</p>',
	},
	fr: {
		name: 'Reservatie pagina (fr)',
		content: '<p>Tekst</p>',
	},
	en: {
		name: 'Reservatie pagina (en)',
		content: '<p>Tekst</p>',
	},
	test: {
		name: 'Reservatie pagina (test)',
		content: '<p>Tekst</p>',
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
				if (nearbyPages[lang.name]) {
					promises.push(
						createPage({
							...nearbyPages[lang.name],
							language: lang,
						}, NearbyPage)
					);
				}
				if (reservationPages[lang.name]) {
					promises.push(
						createPage({
							...reservationPages[lang.name],
							language: lang,
						}, ReservationPage)
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

exports = module.exports = async function (done) {
	await createNewPages();
	done();
};
