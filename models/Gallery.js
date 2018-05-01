var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
	nodelete: false,
});

Gallery.add({
	name: { label: 'Naam', type: String, required: true },
	publishedDate: { label: 'Publicatiedatum', type: Date, default: Date.now },
	heroImage: { label: 'Album afbeelding', type: Types.CloudinaryImage },
	images: { label: 'Afbeeldingen', type: Types.CloudinaryImages },
});

Gallery.register();
