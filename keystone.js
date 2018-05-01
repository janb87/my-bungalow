// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
const keystone = require('keystone');
const connectMongo = require('connect-mongo');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/my-bungalow'

keystone.init({
	'name': 'Je suis Durbuy 84 Admin',
	'brand': 'Je suis Durbuy 84 Admin',

	'static': 'public',
	'favicon': 'public/favicon.ico',

	'auto update': true,
	'admin path': 'admin',
	'session': true,
	'session store': function (session) {
		const MongoStore = connectMongo(session);
		return new MongoStore({
			url: MONGODB_URI,
			autoRemove: 'interval',
			autoRemoveInterval: 10, // In minutes. Default
		});
	},
	'auth': true,
	'cookie secret': process.env.COOKIE_SECRET,
	'user model': 'User',

	'mongo': MONGODB_URI,
});

// Load your project's Models
keystone.import('models');

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	homePage: 'HomePage',
	bungalowPage: 'BungalowPage',
	parkPage: 'ParkPage',
	galleries: 'galleries',
	contact: 'Contact',
	translations: 'translations',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
