import React from 'react';
import App from '../components/container/app';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';

const Book = ({ config, userAgent, reservationPage }) => {
	return [
		<App key="app" config={config} userAgent={userAgent}>
			<div className="book">
				<h1>{localize('book_title', config.translations)}</h1>
				<section
					dangerouslySetInnerHTML={{ __html: reservationPage.content }}
				/>
			</div>
		</App>,
		<style key="styles" jsx="">{`
			.book {
				margin: ${spacingLg()};
			}
			@media (min-width: ${screenSizes.SM_MIN}) {
				.book {
					margin: ${spacingXlg()};
				}
			}
		`}</style>,
	];
};

Book.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${lang ? encodeURIComponent(lang) + '/' : ''}config`
	);
	const reservationPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || settings.defaultLanguage)}/reservation-page`
	);
	return {
		config: {
			translations,
			settings,
			lang: lang || settings.defaultLanguage,
		},
		userAgent: req && req.headers['user-agent'],
		reservationPage,
	};
};

export default Book;
