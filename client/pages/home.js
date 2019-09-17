import React from 'react';
import colors from '../styles/colors';
import { getJson } from '../utils/ajax';
import screenSizes from '../styles/screenSizes';
import { spacingXlg, spacingLg } from '../styles/spacing';

const HomePage = ({ message }) => [
	<div key="home-page" className="message">
		<p>{message}</p>
	</div>,
	<style key="styles" jsx="">{`
		.message {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			margin: 0 ${spacingLg()};
			width: calc(100% - 100px);

			font-size: 2em;
			color: ${colors.white};
		}

		@media (min-width: ${screenSizes.SM_MIN}) {
			.message {
				height: calc(100% - 100px);
				margin: 0 ${spacingXlg()};

				font-size: 2.5em;
			}
		}
	`}</style>,
];

HomePage.getInitialProps = async ({ req, query: { lang }, config }) => {
	const { message, backgroundImage } = await getJson(
		req,
		`/api/${encodeURIComponent(lang || config.settings.defaultLanguage)}/home-page`
	);
	return {
		message,
		backgroundImage: backgroundImage || '/img/home-banner.jpg',
		stickMenuToBottom: true,
		config,
	};
};

export default HomePage;
