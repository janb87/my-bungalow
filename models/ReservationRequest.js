const keystone = require('keystone');
const Types = keystone.Field.Types;

const ReservationRequest = new keystone.List('ReservationRequest', {
	nocreate: true,
	nodelete: true,
	noedit: true,
});

ReservationRequest.add({
	createdAt: { label: 'Datum', type: Date, default: Date.now },
	name: { label: 'Naam', type: String, required: true },
	email: { label: 'E-mail', type: Types.Email, required: true },
	message: { label: 'Boodschap', type: Types.Textarea, required: true },
});

ReservationRequest.defaultSort = '-createdAt';
ReservationRequest.defaultColumns = 'createdAt, name, email, message';
ReservationRequest.register();
