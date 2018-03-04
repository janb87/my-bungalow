import React from 'react';
import colors from './colors';

export default () => [
	<link
		key="global-font"
		href="https://fonts.googleapis.com/css?family=Roboto+Slab"
		rel="stylesheet"
	/>,
	<span key="global-styles">
		<style global jsx="">{`
			body {
				padding: 0;
				margin: 0;

				font-family: 'Roboto Slab', serif;
				font-size: 16px;
				color: ${colors.PALETTE_1};
			}
		`}</style>
	</span>,
];
