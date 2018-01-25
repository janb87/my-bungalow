const keystone = require('keystone');
const HomePage = keystone.list('HomePage');

exports = module.exports = function (req, res) {
	HomePage.model
		.find()
		.limit(1)
		.exec((err, homePage) => {
			if (err) {
				// TODO: handle errors
				return res.json({});
			}
			return res.json(homePage[0]);
		});
};
