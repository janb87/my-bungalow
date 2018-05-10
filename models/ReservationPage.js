const keystone = require('keystone');
const Types = keystone.Field.Types;

const ReservationPage = new keystone.List('ReservationPage', {
	nocreate: true,
	nodelete: true,
});

ReservationPage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: {
		label: 'Taal',
		type: Types.Relationship,
		noedit: true,
		ref: 'Lang',
		required: true,
	},
	content: {
		label: 'Tekst',
		type: Types.Html,
		wysiwyg: true,
		height: 500,
		required: true,
	},
});

ReservationPage.defaultSort = '-name';
ReservationPage.defaultColumns = 'name, language';
ReservationPage.register();
