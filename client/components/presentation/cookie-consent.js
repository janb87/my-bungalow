import { useEffect } from 'react';
import 'CookieConsent';
import colors from '../../styles/colors';

function CookieConsent () {
	useEffect(() => initCookieConsent(), []);
	return null;
}

function initCookieConsent () {
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
	});
}

export default CookieConsent;
