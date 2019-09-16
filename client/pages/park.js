import React from 'react';
import App from '../components/container/app';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';
import Gallery from '../components/presentation/gallery/gallery';

const Park = ({ config, userAgent, parkPage }) => {
	const photos = parkPage.images.map(({ url, width, height }) => ({
		src: url,
		width: width,
		height: height,
	}));
	return [
		<App key="app" config={config} userAgent={userAgent}>
			<div className="park">
				<h1>{localize('the_park_title', config.translations)}</h1>
				<section
					dangerouslySetInnerHTML={{ __html: parkPage.intro }}
				/>
				<h2>{localize('the_park_accomodations', config.translations)}</h2>
				<section dangerouslySetInnerHTML={{ __html: parkPage.accomodations }} />
				<section>
					<Gallery photos={photos} translations={config.translations} />
				</section>
			</div>
		</App>,
		<style key="styles" jsx="">{`
			.park {
				margin: ${spacingLg()};
			}
			.park section {
				margin: ${spacingXlg()} 0;
			}
			.park h2 + section, .park h1 + section {
				margin-top: 0;
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
	const parkPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/park-page`
	);
	return {
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
		parkPage,
	};
};

export default Park;
