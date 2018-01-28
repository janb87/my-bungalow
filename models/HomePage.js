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
	message: { type: String, required: true },
	backgroundImage: { type: Types.CloudinaryImage },
	language: { type: Types.Relationship, ref: 'Lang', required: true },
});

HomePage.defaultSort = '-createdAt';
HomePage.defaultColumns = 'name, message, backgroundImage';
HomePage.register();
