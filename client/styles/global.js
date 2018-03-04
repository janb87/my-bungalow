import React from 'react';
import colors from './colors';

export default () => [
	<link
		key="global-font"
		href="https://fonts.googleapis.com/css?family=Montserrat"
		rel="stylesheet"
	/>,
	<span key="global-styles">
		<style global jsx="">{`
			body {
				padding: 0;
				margin: 0;

				font-family: 'Montserrat', serif;
				font-size: 16px;
				color: ${colors.black};
			}

			a {
				color: ${colors.green};
				text-decoration: none;
			}

			a:hover {
				color: ${colors.teal};
				text-decoration: none;
			}
		`}</style>
	</span>,
];
