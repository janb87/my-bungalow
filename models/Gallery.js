const keystone = require('keystone');
const Types = keystone.Field.Types;

const Gallery = new keystone.List('Gallery', {
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

