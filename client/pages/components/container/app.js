import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import globalStyles from '../../../styles/global';
import screenSizes from '../../../styles/screenSizes';
import Nav from '../presentation/nav';
import navLinkStyles from '../../../styles/nav-link';
import Head from 'next/head';
import localize from '../../../utils/localize';
import colors from '../../../styles/colors';

const App = ({
	config: { lang, translations, settings },
	backgroundImage,
	children,
	stickMenuToBottom = false,
	header,
	userAgent,
}) => {
	const muiTheme = getMuiTheme(
		{
			palette: {
				primary1Color: colors.PALETTE_5,
				primary2Color: colors.PALETTE_1,
				primary3Color: colors.PALETTE_3,
				accent1Color: colors.PALETTE_2,
				accent2Color: colors.PALETTE_4,
				accent3Color: colors.PALETTE_3,
				textColor: colors.PALETTE_1,
				secondaryTextColor: colors.PALETTE_2,
				alternateTextColor: colors.WHITE,
				canvasColor: colors.WHITE,
				borderColor: colors.LIGHT_GRAY,
				disabledColor: colors.LIGHT_GRAY,
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
						height: 100vh;
						${backgroundImage
							&& `background-image: url(${backgroundImage});`} background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
					}

					.page-content {
						margin: 0 auto;
						${!backgroundImage && `max-width: ${screenSizes.LG_MIN};`};
					}
				`}</style>
				{React.createElement(navLinkStyles)}
				{React.createElement(globalStyles)}
			</div>
		</MuiThemeProvider>
	);
};

export default App;
