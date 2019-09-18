import React from 'react';
import { Link } from '../routes';
import colors from '../styles/colors';
import { getJson } from '../utils/ajax';
import screenSizes from '../styles/screenSizes';
import { spacingXlg, spacingLg } from '../styles/spacing';
import Button from '../components/presentation/common/button';

const HomePage = ({ message, buttonText, lang }) => [
	<div key="home-page" className="message">
		<p>{message}</p>
		<Link route={`bungalow-${lang}`} params={{ lang }}>
			<Button label={buttonText} />
		</Link>
	</div>,
	<style key="styles" jsx="">{`
		.message {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			margin: 0 ${spacingLg()};
			width: calc(100% - 100px);
		}

		.message > p {
			color: ${colors.white};
			font-size: 2em;
		}

		.message .button {
			margin-top: 0;
		}

		@media (min-width: ${screenSizes.SM_MIN}) {
			.message {
				height: calc(100% - 100px);
				margin: 0 ${spacingXlg()};
			}

			.message > p {
				font-size: 2.5em;
			}
		}
	`}</style>,
];

HomePage.getInitialProps = async ({ req, query: { lang }, config }) => {
	const language = lang || config.settings.defaultLanguage;
	const { message, backgroundImage, buttonText } = await getJson(
		req,
		`/api/${encodeURIComponent(language)}/home-page`
	);
	return {
		message,
		backgroundImage: backgroundImage || '/img/home-banner.jpg',
		buttonText,
		stickMenuToBottom: true,
		config,
		lang: language,
	};
};

export default HomePage;
