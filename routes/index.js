/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
const next = require('next');
const { parse } = require('url');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: 'client', dev });

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
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
			const parsedUrl = parse(req.url, true);
			const { pathname, query } = parsedUrl;
			let lang = 'nl';
			let path = pathname;
			const parsedPath = pathname.match(/\/(.*?)(\/.*|$)/i);
			if (
				parsedPath
				&& parsedPath.length > 1
				&& pathname.indexOf('/_next') !== 0
			) {
				lang = parsedPath[1] || 'nl';
				path = parsedPath[2] || '/';
			}
			return nextApp.render(req, res, path, { ...query, lang });
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
