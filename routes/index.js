const keystone = require('keystone');
const helmet = require('helmet');
const enforceSsl = require('express-enforces-ssl');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);
const next = require('next');
const nextConfig = require('../client/next.config');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
	dir: 'client',
	dev,
	conf: nextConfig,
});
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

// Setup Route Bindings
exports = module.exports = function (app) {
	// Hsts / ssl
	app.use(helmet());
	app.disable('x-powered-by');

	if (!dev) {
		app.enable('trust proxy');
		app.use(enforceSsl());
	}

	// Api
	app.get('/api/:lang/home-page', routes.api.homePage);
	app.get('/api/:lang/bungalow-page', routes.api.bungalowPage);
	app.get('/api/:lang/park-page', routes.api.parkPage);
	app.get('/api/:lang/nearby-page', routes.api.nearbyPage);
	app.get('/api/:lang/reservation-page', routes.api.reservationPage);
	app.get('/api/config', routes.api.config);
	app.get('/api/:lang/config', routes.api.config);
	app.post('/api/contact', routes.api.contact.submitForm);

	// Pages
	app.get('*', (req, res) => {
		if (nextStarted) {
			return handler(req, res);
		}
		res.send('Application is starting... Refresh the page to retry.');
	});

	// Error handling
	app.use((err, req, res, next) => {
		console.error(err.stack);
		if (err.name === 'ValidationError') {
			const errors = Object.keys(err.errors).reduce((accumulator, errKey) => {
				const fieldError = err.errors[errKey];
				accumulator[errKey] = {
					kind: fieldError.kind,
					path: fieldError.path,
					message: fieldError.message,
				};
				return accumulator;
			}, {});
			return res.status(400).json(errors);
		}
		// TODO: add status code
		// + add messages inside errors
		res.status(500).json(err.message);
	});

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	// Start next.js
	nextApp
		.prepare()
		.then(() => {
			nextStarted = true;
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});
};
