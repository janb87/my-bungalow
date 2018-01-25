import React from 'react';

export default () => [
	<link
		key="global-font"
		href="https://fonts.googleapis.com/css?family=Roboto+Slab"
		rel="stylesheet"
	/>,
	<span key="global-styles">
		<style global jsx>{`
			body {
				padding: 0;
				margin: 0;

				font-family: 'Roboto Slab', serif;
				font-size: 16px;
			}
		`}</style>
	</span>,
];
