const keystone = require('keystone');

/**
 * Lang (language) Model
 * =============
 */

const Lang = new keystone.List('Lang', {
	nocreate: true,
	nodelete: true,
});

Lang.add({
	name: { label: 'Naam', type: String, required: true },
});

Lang.register();
