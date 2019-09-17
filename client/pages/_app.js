import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import globalStyles from '../styles/global';
import screenSizes from '../styles/screenSizes';
import Nav from '../components/presentation/common/nav';
import localize from '../utils/localize';
import colors from '../styles/colors';
import DefaultHeader from '../components/presentation/header/defaultHeader';
import HomePageHeader from '../components/presentation/header/homePageHeader';
import { getJson } from '../utils/ajax';
import { trackPageView } from '../utils/analytics';

const CookieConsent = dynamic(
	() => import('../components/presentation/cookie-consent'),
	{ ssr: false }
);

class MyApp extends App {
	// Only uncomment this method if you have blocking data requirements for
	// every single page in your application. This disables the ability to
	// perform automatic static optimization, causing every page in your app to
	// be server-side rendered.
	//
	static async getInitialProps (appContext) {
		const { req, query: { lang }, pathname } = appContext.ctx;

		const { translations, settings } = await getJson(
			req,
			`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
		);
		const appProps = {
			config: {
				translations,
				settings,
				lang: lang || settings.defaultLanguage,
			},
			userAgent: req && req.headers['user-agent'],
			activeRoute: pathname,
		};
		// calls page's `getInitialProps` and fills `appProps.pageProps`
		const { pageProps } = await App.getInitialProps({ ...appContext, ctx: { ...appContext.ctx, ...appProps } });
		return {
			...appProps,
			backgroundImage: pageProps.backgroundImage,
			stickMenuToBottom: pageProps.stickMenuToBottom,
			pageProps,
		};
	}

	componentDidMount () {
		Router.onRouteChangeComplete = url => {
			trackPageView(url);
		};
	}

	render () {
		const {
			Component,
			pageProps,
			config,
			backgroundImage,
			stickMenuToBottom = false,
			userAgent,
			activeRoute,
		} = this.props;
		let header = null;
		const { lang, translations } = config;
		if (!stickMenuToBottom) {
			header = <DefaultHeader lang={lang} translations={translations} activeRoute={activeRoute} />;
		} else {
			header = <HomePageHeader {...config} />;
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
						<meta key="description" name="description" content={localize('website_description', translations)} />
						{/* TODO: add more met tags for SEO */}
						<script src="https://www.google.com/recaptcha/api.js" />
					</Head>
					<header>{header}</header>
					<main>
						<CookieConsent lang={lang} translations={translations} />
						<Nav
							stickToBottom={stickMenuToBottom}
							lang={lang}
							translations={translations}
							maxWidth={!backgroundImage ? screenSizes.LG_MIN : undefined}
							activeRoute={activeRoute}
						/>
						<div className="page-content"><Component {...pageProps} config={config} /></div>
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
	}
}

export default MyApp;
