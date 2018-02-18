import React from 'react';
import 'isomorphic-unfetch';
import colors from '../styles/colors';
import App from './components/container/app';
import { getJson } from '../utils/ajax';

const HomePage = ({ message, backgroundImage, query: { lang } }) => [
	<App key="app" lang={lang} backgroundImage={backgroundImage}>
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

HomePage.getInitialProps = async ({ req, query }) => {
	// TODO: error handling (eg wrong language)
	const { message, backgroundImage } = await getJson(
		req,
		`/api/${encodeURIComponent(query.lang || 'nl')}/home-page`
	);
	return { message, backgroundImage, query };
};

export default HomePage;
