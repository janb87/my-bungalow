import React from 'react';
import App from '../components/container/app';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';
import Gallery from '../components/presentation/gallery/gallery';

const Nearby = ({ config, userAgent, nearbyPage }) => {
	const photos = nearbyPage.images.map(({ url, width, height }) => ({
		src: url,
		width: width,
		height: height,
	}));
	return [
		<App key="app" config={config} userAgent={userAgent}>
			<div className="nearby">
				<h1>{localize('nearby_title', config.translations)}</h1>
				<section>
					<Gallery photos={photos} translations={config.translations} />
				</section>
				<section
					dangerouslySetInnerHTML={{ __html: nearbyPage.content }}
				/>
			</div>
		</App>,
		<style key="styles" jsx="">{`
			.nearby {
				margin: ${spacingLg()};
			}
			@media (min-width: ${screenSizes.SM_MIN}) {
				.nearby {
					margin: ${spacingXlg()};
				}
			}
		`}</style>,
	];
};

Nearby.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
	);
	const nearbyPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/nearby-page`
	);
	return {
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
		nearbyPage,
	};
};

export default Nearby;
