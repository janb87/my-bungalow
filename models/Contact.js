var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

const Contact = new keystone.List('Contact', {
	nocreate: true,
	nodelete: true,
	noedit: true,
});

Contact.add({
	name: { type: String, required: true },
	email: { type: Types.Email, required: true },
	message: { type: Types.Textarea, required: true },
});

Contact.defaultSort = '-createdAt';
Contact.defaultColumns = 'name, email, message';
Contact.register();
