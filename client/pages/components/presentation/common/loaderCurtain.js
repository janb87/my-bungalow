import React from 'react';
import Loader from './loader';
import colors from '../../../../styles/colors';

export default function LoaderCurtain ({ children, show }) {
	// TODO: show after delay
	if (!show) {
		return null;
	}
	return (
		<div className="loader-curtain">
			<div className="loader-content">
				<Loader show={true} />
			</div>
			<style key="styles" jsx="">{`
				.loader-curtain {
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;

					opacity: 0.5;
					z-index: 999;
					
					background-color: ${colors.gray_dark};
				}

				.loader-content {
					height: 100vh;
					width: 100px;
					margin: 0 auto;

					display: flex;
					flex-direction: column;
					justify-content: center;
					opacity: 1;
				}
			`}</style>
		</div>
	);
}
