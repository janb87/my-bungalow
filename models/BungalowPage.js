var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * BungalowPage Model
 * =============
 */

const BungalowPage = new keystone.List('BungalowPage', {
	nocreate: false,
	nodelete: true,
});

BungalowPage.add({
	name: { type: String, noedit: true, required: true },
	language: {
		type: Types.Relationship,
		noedit: true,
		ref: 'Lang',
		required: true,
		initial: false,
	},
	images: { type: Types.CloudinaryImages, folder: 'bungalow' },
	characteristics: {
		type: Types.Html,
		wysiwyg: true,
		height: 150,
		required: true,
		initial: false,
	},
	groundPlanImage: { type: Types.CloudinaryImage, required: true, initial: false },
});

BungalowPage.defaultSort = '-createdAt';
BungalowPage.defaultColumns = 'name, language';
BungalowPage.register();
