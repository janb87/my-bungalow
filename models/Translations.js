const keystone = require('keystone');
const Types = keystone.Field.Types;

const Translations = new keystone.List('Translations', {
	nodelete: true,
	nocreate: true,
});

const textOptions = { type: Types.Text, dependsOn: { isHtml: false } };
const htmlOptions = {
	type: Types.Html,
	wysiwyg: true,
	height: 150,
	dependsOn: { isHtml: true },
};

Translations.add({
	name: { type: String, noedit: true, required: true },
	isHtml: { type: Types.Boolean, noedit: true, default: false },
	translation_test: {
		...textOptions,
		label: 'Voorbeeld (test)',
	},
	translation_nl: {
		...textOptions,
		label: 'Nederlands',
	},
	translation_fr: {
		...textOptions,
		label: 'Frans',
	},
	translation_en: {
		...textOptions,
		label: 'Engels',
	},
	translation_test_html: {
		...htmlOptions,
		label: 'Voorbeeld (test)',
	},
	translation_nl_html: {
		...htmlOptions,
		label: 'Nederlands',
	},
	translation_fr_html: {
		...htmlOptions,
		label: 'Frans',
	},
	translation_en_html: {
		...htmlOptions,
		label: 'Engels',
	},
});

Translations.defaultSort = '+name';
Translations.defaultColumns
	= 'name, translation_test, translation_nl, translation_fr, translation_en';
Translations.register();
