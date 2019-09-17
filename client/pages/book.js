import React from 'react';
import { getJson } from '../utils/ajax';
import { spacingLg, spacingXlg } from '../styles/spacing';
import screenSizes from '../styles/screenSizes';
import localize from '../utils/localize';

const Book = ({ config, reservationPage }) => {
	return [
		<div key="book-page" className="book">
			<h1>{localize('book_title', config.translations)}</h1>
			<section
				dangerouslySetInnerHTML={{ __html: reservationPage.content }}
			/>
		</div>,
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

Book.getInitialProps = async ({ req, query: { lang }, config }) => {
	const reservationPage = await getJson(
		req,
		`/api/${encodeURIComponent(lang || config.settings.defaultLanguage)}/reservation-page`
	);
	return {
		config,
		reservationPage,
	};
};

export default Book;
