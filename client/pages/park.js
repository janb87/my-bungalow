import React from 'react';
import App from './components/container/app';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';

const Park = ({ config, userAgent }) => {
	return [
		<App key="app" config={config} userAgent={userAgent}>
			<div className="park">
				{'Park'}
			</div>
		</App>,
		<style key="styles" jsx="">{`
			.park {
				margin: ${spacingLg()};
			}
			@media (min-width: ${screenSizes.SM_MIN}) {
				.park {
					margin: ${spacingXlg()};
				}
			}
		`}</style>,
	];
};

Park.getInitialProps = async ({ req, query: { lang } }) => {
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

export default Park;
