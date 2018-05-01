import React, { PureComponent } from 'react';
import localize from '../../../../utils/localize';
import ReactPhotoGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Measure from 'react-measure';

class Gallery extends PureComponent {
	constructor (props) {
		super(props);

		this.state = { currentImage: 0, width: -1 };
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
	}

	render () {
		const { photos, translations } = this.props;
		const { width } = this.state;

		if (!Array.isArray(photos) || photos.length === 0) {
			return <p>{localize('gallery_no_images', translations)}</p>;
		}

		return [
			<Measure
				key="gallery"
				bounds
				onResize={contentRect =>
					this.setState({ width: contentRect.bounds.width })
				}
			>
				{({ measureRef }) => {
					if (width < 1) {
						return <div ref={measureRef} />;
					}
					let columns = 1;
					if (width >= 480) {
						columns = 2;
					}
					if (width >= 1024) {
						columns = 3;
					}
					if (width >= 1824) {
						columns = 4;
					}
					return (
						<div ref={measureRef}>
							<ReactPhotoGallery
								columns={columns}
								photos={photos}
								onClick={this.openLightbox}
							/>
						</div>
					);
				}}
			</Measure>,
			<Lightbox
				key="lightbox"
				images={photos}
				onClose={this.closeLightbox}
				onClickPrev={this.gotoPrevious}
				onClickNext={this.gotoNext}
				currentImage={this.state.currentImage}
				isOpen={this.state.lightboxIsOpen}
			/>,
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

export default Gallery;
