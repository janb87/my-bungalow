import React from 'react';
import { getJson } from '../utils/ajax';
import localize from '../utils/localize';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import Gallery from '../components/presentation/gallery/gallery';

const Bungalow = ({ config, bungalowPage }) => {
	const photos = bungalowPage.images.map(({ url, width, height }) => ({
		src: url,
		width: width,
		height: height,
	}));
	return [
		<div key="bungalow-page" className="the-bungalow">
			<h1>{localize('the_bungalow_title', config.translations)}</h1>
			<h2>{localize('the_bungalow_general', config.translations)}</h2>
			<section
				dangerouslySetInnerHTML={{ __html: bungalowPage.characteristics }}
			/>
			{bungalowPage.groundPlanImage && (
				<section>
					<Gallery
						photos={[bungalowPage.groundPlanImage]}
						translations={config.translations}
					/>
				</section>
			)}
			<section>
				<Gallery photos={photos} translations={config.translations} />
			</section>
			<h2>{localize('the_bungalow_house_rules', config.translations)}</h2>
			<section dangerouslySetInnerHTML={{ __html: bungalowPage.rules }} />
		</div>,
		<style key="styles" jsx="">{`
			.the-bungalow {
				margin: ${spacingLg()};
			}
			.the-bungalow section {
				margin: ${spacingXlg()} 0;
			}
			.the-bungalow h2 + section {
				margin-top: 0;
			}
			@media (min-width: ${screenSizes.SM_MIN}) {
				.the-bungalow {
					margin: ${spacingXlg()};
				}
			}
		`}</style>,
	];
};

Bungalow.getInitialProps = async ({ req, config }) => {
	const { lang, settings } = config;
	const bungalowPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/bungalow-page`
	);
	return {
		config,
		bungalowPage,
	};
};

export default Bungalow;
