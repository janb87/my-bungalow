// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'my-bungalow',
	'brand': 'my-bungalow',

	'static': 'public',
	// 'favicon': 'public/favicon.ico',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	'mongo': process.env.MONGODB_URI || 'mongodb://localhost/my-bungalow',
});

// Load your project's Models
keystone.import('models');

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	homePage: 'HomePage',
	galleries: 'galleries',
	contact: 'Contact',
	translations: 'translations',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
