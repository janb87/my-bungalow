import React from 'react';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';
import Gallery from '../components/presentation/gallery/gallery';

const Nearby = ({ config, nearbyPage }) => {
	const photos = nearbyPage.images.map(({ url, width, height }) => ({
		src: url,
		width: width,
		height: height,
	}));
	return [
		<div key="nearby-page" className="nearby">
			<h1>{localize('nearby_title', config.translations)}</h1>
			<section>
				<Gallery photos={photos} translations={config.translations} />
			</section>
			<section
				dangerouslySetInnerHTML={{ __html: nearbyPage.content }}
			/>
		</div>,
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

Nearby.getInitialProps = async ({ req, query: { lang }, config }) => {
	const nearbyPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || config.settings.defaultLanguage)}/nearby-page`
	);
	return {
		config,
		nearbyPage,
	};
};

export default Nearby;
