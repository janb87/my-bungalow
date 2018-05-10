const keystone = require('keystone');
const Types = keystone.Field.Types;

const Contact = new keystone.List('Contact', {
	nocreate: true,
	nodelete: true,
	noedit: true,
});

Contact.add({
	createdAt: { label: 'Datum', type: Date, default: Date.now },
	name: { label: 'Naam', type: String, required: true },
	email: { label: 'E-mail', type: Types.Email, required: true },
	message: { label: 'Boodschap', type: Types.Textarea, required: true },
});

Contact.defaultSort = '-createdAt';
Contact.defaultColumns = 'createdAt, name, email, message';
Contact.register();
