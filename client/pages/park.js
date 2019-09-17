import React from 'react';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';
import Gallery from '../components/presentation/gallery/gallery';

const Park = ({ config, parkPage }) => {
	const photos = parkPage.images.map(({ url, width, height }) => ({
		src: url,
		width: width,
		height: height,
	}));
	return [
		<div key="park-page" className="park">
			<h1>{localize('the_park_title', config.translations)}</h1>
			<section
				dangerouslySetInnerHTML={{ __html: parkPage.intro }}
			/>
			<h2>{localize('the_park_accomodations', config.translations)}</h2>
			<section dangerouslySetInnerHTML={{ __html: parkPage.accomodations }} />
			<section>
				<Gallery photos={photos} translations={config.translations} />
			</section>
		</div>,
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

Park.getInitialProps = async ({ req, query: { lang }, config }) => {
	const parkPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || config.settings.defaultLanguage)}/park-page`
	);
	return {
		config,
		parkPage,
	};
};

export default Park;
