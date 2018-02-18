import React from 'react';
import 'isomorphic-unfetch';
import colors from '../styles/colors';
import App from './components/container/app';
import { getJson } from '../utils/ajax';

const HomePage = ({ message, backgroundImage, config }) => [
	<App
		key="app"
		config={config}
		backgroundImage={backgroundImage}
		bottomNav={true}
	>
		<div className="message">
			<p>{message}</p>
		</div>
	</App>,
	<style key="styles" jsx="">{`
		.message {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: calc(100% - 200px);
			margin: 0 0 0 50px;

			font-size: 2em;
			max-width: 450px;
			color: ${colors.WHITE};
		}

		@media (min-width: 768px) {
			.message {
				height: calc(100% - 100px);
				font-size: 2.5em;
			}
		}
	`}</style>,
];

HomePage.getInitialProps = async ({ req, query: { lang } }) => {
	const { message, backgroundImage } = await getJson(
		req,
		`/api/${encodeURIComponent(lang || 'nl')}/home-page`
	);
	const { translations, settings } = await getJson(
		req,
		`/api/${encodeURIComponent(lang || 'nl')}/config`
	);
	return {
		message,
		backgroundImage,
		config: { translations, settings, lang },
	};
};

export default HomePage;
