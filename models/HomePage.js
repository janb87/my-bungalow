var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HomePage Model
 * =============
 */

const HomePage = new keystone.List('HomePage', {
	nocreate: true,
	nodelete: true,
});

HomePage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: { label: 'Taal', type: Types.Relationship, noedit: true, ref: 'Lang', required: true },
	message: { label: 'Tekst', type: String, required: true },
	backgroundImage: { label: 'Achtergrond', type: Types.CloudinaryImage, folder: 'home' },
});

HomePage.defaultSort = '-name';
HomePage.defaultColumns = 'name, language, message, backgroundImage';
HomePage.register();
