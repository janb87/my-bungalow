import React from 'react';
import App from './components/container/app';
import { getJson } from '../utils/ajax';
import localize from '../utils/localize';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';

const Bungalow = ({ config, userAgent }) => [
	<App key="app" config={config} userAgent={userAgent}>
		<div className="the-bungalow">
			<h1>{localize('the_bungalow_title', config.translations)}</h1>
			<p>{localize('the_bungalow_description', config.translations)}</p>
		</div>
	</App>,
	<style key="styles" jsx="">{`
		.the-bungalow {
			margin: ${spacingLg()};
		}
		@media (min-width: ${screenSizes.SM_MIN}) {
			.the-bungalow {
				margin: ${spacingXlg()};
			}
		}
	`}</style>,
];

Bungalow.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
	);
	return {
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
	};
};

export default Bungalow;
