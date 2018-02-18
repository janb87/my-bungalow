const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: 'client', dev });
const clientRoutes = require('../client/routes');
const handler = clientRoutes.getRequestHandler(nextApp);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	api: importRoutes('./api'),
};

let nextStarted = false;
nextApp
	.prepare()
	.then(() => {
		nextStarted = true;
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

// Setup Route Bindings
exports = module.exports = function (app) {
	// Api
	app.get('/api/:lang/home-page', routes.api.homePage);
	app.post('/api/:lang/contant', routes.api.contact);

	// Pages
	app.get('*', (req, res) => {
		if (nextStarted) {
			return handler(req, res);
		}
		res.send('Application is starting...');
	});

	// Error handling
	app.use((err, req, res, next) => {
		console.error(err.stack);
		// TODO: add status code
		// + add messages inside errors
		res.status(500).json(err.message);
	});

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
