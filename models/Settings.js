const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Settings Model
 * =============
 */

const Settings = new keystone.List('Settings', {
	nocreate: true,
	nodelete: true,
});

Settings.add({
	name: { type: String, required: true, noedit: true },
	defaultLanguage: { type: Types.Relationship, ref: 'Lang', required: true },
});

Settings.register();
