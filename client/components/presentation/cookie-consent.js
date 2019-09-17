import { useEffect } from 'react';
import 'CookieConsent';
import colors from '../../styles/colors';
import localize from '../../utils/localize';

function CookieConsent ({ lang, translations }) {
	useEffect(() => initCookieConsent(translations), [lang]);
	return null;
}

function initCookieConsent (translations) {
	if (window.cookieconsent.hasInitialised) {
		const consentEl = document.querySelector('.cc-window');
		consentEl.parentElement.removeChild(consentEl);
	}
	window.cookieconsent.initialise({
		palette: {
			popup: {
				background: colors.light,
				text: colors.black,
			},
			button: {
				background: colors.green,
				text: colors.white,
			},
		},
		theme: 'edgeless',
		position: 'top',
		content: {
			message: localize('cookie_consent_title', translations),
			dismiss: localize('cookie_consent_dismiss', translations),
			link: localize('cookie_consent_read_more', translations),
			href: localize('cookie_consent_read_more_link', translations),
			target: '_blank',
		},
	});
}

export default CookieConsent;
