import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import globalStyles from '../../../styles/global';
import screenSizes from '../../../styles/screenSizes';
import Nav from '../presentation/common/nav';
import Head from 'next/head';
import localize from '../../../utils/localize';
import colors from '../../../styles/colors';
import DefaultHeader from '../presentation/header/defaultHeader';

const App = ({
	config: { lang, translations, settings },
	backgroundImage,
	children,
	stickMenuToBottom = false,
	header,
	userAgent,
}) => {
	if (!header) {
		header = <DefaultHeader lang={lang} translations={translations} />;
	}
	const muiTheme = getMuiTheme(
		{
			fontFamily: 'Roboto Slab, serif',
			palette: {
				primary1Color: colors.PALETTE_1,
				primary2Color: colors.PALETTE_2,
				primary3Color: colors.PALETTE_3,
				accent1Color: colors.green,
				accent2Color: colors.yellow,
				accent3Color: colors.danger,
				textColor: colors.dark,
				secondaryTextColor: colors.gray_dark,
				alternateTextColor: colors.white,
				canvasColor: colors.white,
				borderColor: colors.gray_light,
				disabledColor: colors.gray_light,
			},
		},
		{
			avatar: {
				borderColor: null,
			},
			userAgent,
		}
	);
	return (
		<MuiThemeProvider muiTheme={muiTheme}>
			<div className="app">
				<Head>
					<title>{localize('website_title', translations)}</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
					{/* TODO: add more met tags for SEO */}
					<script src="https://www.google.com/recaptcha/api.js" />
				</Head>
				<header>{header}</header>
				<main>
					<Nav
						stickToBottom={stickMenuToBottom}
						lang={lang}
						translations={translations}
						maxWidth={!backgroundImage ? screenSizes.LG_MIN : undefined}
					/>
					<div className="page-content">{children}</div>
				</main>
				<style jsx="">{`
					main {
						display: block;
						${stickMenuToBottom && `height: 100vh;`}
						${backgroundImage
							&& `background-image: url(${backgroundImage});`} background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
					}

					.page-content {
						height: 100%;
						margin: 0 auto;
						${!backgroundImage && `max-width: ${screenSizes.LG_MIN};`};
					}
				`}</style>
				{React.createElement(globalStyles)}
			</div>
		</MuiThemeProvider>
	);
};

export default App;
