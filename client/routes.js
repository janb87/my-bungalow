const routes = require('next-routes')();

routes
	.add('default', '/', 'home')
	.add('default-lang', '/:lang', 'home')
	.add('home', '/:lang/home', 'home')
	.add('contact', '/:lang/contact', 'contact')
	.add('bungalow-nl', '/:lang/bungalow', 'bungalow');

module.exports = routes;
