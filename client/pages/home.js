import React from 'react';
import colors from '../styles/colors';
import App from './components/container/app';
import HomePageHeader from './components/presentation/header/homePageHeader';
import { getJson } from '../utils/ajax';

const HomePage = ({ message, backgroundImage, config, userAgent }) => [
	<App
		key="app"
		config={config}
		backgroundImage={backgroundImage}
		stickMenuToBottom={true}
		header={<HomePageHeader {...config} />}
		userAgent={userAgent}
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
			height: 100%;
			margin: 0 50px;
			width: calc(100% - 100px);

			font-size: 2em;
			color: ${colors.white};
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
	const { translations, settings } = await getJson(
		req,
		`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
	);
	const { message, backgroundImage } = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/home-page`
	);
	return {
		message,
		backgroundImage: backgroundImage || '/img/home-banner.jpg',
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
	};
};

export default HomePage;
