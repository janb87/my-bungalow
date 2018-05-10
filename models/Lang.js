const keystone = require('keystone');

const Lang = new keystone.List('Lang', {
	nocreate: true,
	nodelete: true,
});

Lang.add({
	name: { label: 'Naam', type: String, required: true },
});

Lang.register();
