import localize from './localize';

export default function localizeError (error, translations = []) {
	if (!error) {
		return null;
	}

	if (error.kind === 'required') {
		return localize('error_required', translations);
	}
	if (error.kind === 'invalid-email') {
		return localize('error_invalid_email', translations);
	}

	return error.message;
}
