var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * BungalowPage Model
 * =============
 */

const ParkPage = new keystone.List('ParkPage', {
	nocreate: true,
	nodelete: true,
});

ParkPage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: {
		label: 'Taal',
		type: Types.Relationship,
		noedit: true,
		ref: 'Lang',
		required: true,
	},
	galleryId: { label: 'Album', type: Types.Relationship, ref: 'Gallery' },
	intro: {
		label: 'Introductie',
		type: Types.Html,
		wysiwyg: true,
		height: 150,
		required: true,
	},
	accomodations: {
		label: 'Accomodaties',
		type: Types.Html,
		wysiwyg: true,
		height: 150,
		required: true,
	},
});

ParkPage.defaultSort = '-name';
ParkPage.defaultColumns = 'name, language';
ParkPage.register();
