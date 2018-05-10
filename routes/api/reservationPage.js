const { getLang } = require('../../services/lang');
const { getReservationPage } = require('../../services/reservationPage');

exports = module.exports = async function (req, res, next) {
	try {
		const { lang } = req.params;
		const { languageId } = req.query;
		if (!lang && !languageId) {
			throw new Error('Language parameter is not set');
		}
		const langModel = languageId ? { id: languageId } : await getLang(lang);
		const reservationPage = await getReservationPage(langModel.id);
		const { content } = reservationPage;

		res.json({
			content,
		});
	} catch (err) {
		next(err);
	}
};
