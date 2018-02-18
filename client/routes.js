const routes = require('next-routes')();

routes
	.add('default', '/', 'home')
	.add('default-lang', '/:lang(en|nl|fr|test)', 'home')
	.add('home', '/:lang(en|nl|fr|test)/home', 'home')
	.add('contact', '/:lang(en|nl|fr|test)/contact', 'contact');

module.exports = routes;
