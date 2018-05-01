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
	name: { type: String, noedit: true, required: true },
	language: { type: Types.Relationship, noedit: true, ref: 'Lang', required: true },
	message: { type: String, required: true },
	backgroundImage: { type: Types.CloudinaryImage },
});

HomePage.defaultSort = '-createdAt';
HomePage.defaultColumns = 'name, language, message, backgroundImage';
HomePage.register();
