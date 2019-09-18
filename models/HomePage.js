const keystone = require('keystone');
const Types = keystone.Field.Types;

const HomePage = new keystone.List('HomePage', {
	nocreate: true,
	nodelete: true,
});

HomePage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: { label: 'Taal', type: Types.Relationship, noedit: true, ref: 'Lang', required: true },
	message: { label: 'Tekst', type: String, required: true },
	backgroundImage: { label: 'Achtergrond', type: Types.CloudinaryImage, folder: 'home' },
	buttonText: { label: 'Tekst knop', type: String, required: true },
});

HomePage.defaultSort = '-name';
HomePage.defaultColumns = 'name, language, message, buttonText, backgroundImage';
HomePage.register();
