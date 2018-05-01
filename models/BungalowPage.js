var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * BungalowPage Model
 * =============
 */

const BungalowPage = new keystone.List('BungalowPage', {
	nocreate: true,
	nodelete: true,
});

BungalowPage.add({
	name: { label: 'Naam', type: String, noedit: true, required: true },
	language: {
		label: 'Taal',
		type: Types.Relationship,
		noedit: true,
		ref: 'Lang',
		required: true,
	},
	images: { label: 'Album', type: Types.Relationship, ref: 'Gallery' },
	characteristics: {
		label: 'Algemene info',
		type: Types.Html,
		wysiwyg: true,
		height: 150,
		required: true,
	},
	rules: {
		label: 'Huisregels',
		type: Types.Html,
		wysiwyg: true,
		height: 150,
		required: true,
	},
	groundPlanImage: {
		label: 'Grondplan',
		type: Types.CloudinaryImage,
		folder: 'bungalow',
	},
});

BungalowPage.defaultSort = '-name';
BungalowPage.defaultColumns = 'name, language';
BungalowPage.register();
