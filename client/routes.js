const routes = require('next-routes')();

routes
	.add('default', '/', 'home')
	.add('default-lang', '/:lang', 'home')
	.add('home', '/:lang/home', 'home')
	.add('contact', '/:lang/contact', 'contact')
	.add('bungalow-nl', '/:lang/de-bungalow', 'bungalow')
	.add('bungalow-en', '/:lang/the-bungalow', 'bungalow');

module.exports = routes;
