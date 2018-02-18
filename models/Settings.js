const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Lang (language) Model
 * =============
 */

const Settings = new keystone.List('Settings', {
	nocreate: true,
	nodelete: true,
});

Settings.add({
	name: { type: String, required: true, noedit: true },
	headerBackgroundImage: { type: Types.CloudinaryImage },
});

Settings.register();
