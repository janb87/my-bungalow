import React, { PureComponent } from 'react';
import App from './components/container/app';
import { getJson } from '../utils/ajax';
import localize from '../utils/localize';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class Bungalow extends PureComponent {
	constructor (props) {
		super(props);

		this.state = { currentImage: 0 };
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
	}

	render () {
		const { config, userAgent, bungalowPage } = this.props;
		const photos = bungalowPage.images.map(({ url, width, height }) => ({
			src: url,
			width: width,
			height: height,
		}));
		return [
			<App key="app" config={config} userAgent={userAgent}>
				<div className="the-bungalow">
					<h1>{localize('the_bungalow_title', config.translations)}</h1>
					<h2>{localize('the_bungalow_general', config.translations)}</h2>
					<section
						dangerouslySetInnerHTML={{ __html: bungalowPage.characteristics }}
					/>
					{photos.length === 0 ? (
						<p>{localize('the_bungalow_no_images', config.translations)}</p>
					) : (
					[
						<Gallery
								key="gallery"
								photos={photos}
								onClick={this.openLightbox}
							/>,
						<Lightbox
								key="lightbox"
								images={photos}
								onClose={this.closeLightbox}
								onClickPrev={this.gotoPrevious}
								onClickNext={this.gotoNext}
								currentImage={this.state.currentImage}
								isOpen={this.state.lightboxIsOpen}
							/>,
					]
					)}
					<h2>{localize('the_bungalow_house_rules', config.translations)}</h2>
					<section dangerouslySetInnerHTML={{ __html: bungalowPage.rules }} />
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
	}

	openLightbox (event, obj) {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
}

Bungalow.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
	);
	const bungalowPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/bungalow-page`
	);
	return {
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
		bungalowPage,
	};
};

export default Bungalow;
