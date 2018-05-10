const keystone = require('keystone');
const Types = keystone.Field.Types;

const NearbyPage = new keystone.List('NearbyPage', {
	nocreate: true,
	nodelete: true,
});

NearbyPage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: {
		label: 'Taal',
		type: Types.Relationship,
		noedit: true,
		ref: 'Lang',
		required: true,
	},
	galleryId: { label: 'Album', type: Types.Relationship, ref: 'Gallery' },
	content: {
		label: 'Tekst',
		type: Types.Html,
		wysiwyg: true,
		height: 500,
		required: true,
	},
});

NearbyPage.defaultSort = '-name';
NearbyPage.defaultColumns = 'name, language';
NearbyPage.register();
