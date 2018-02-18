import React from 'react';
import colors from './colors';

export default () => (
	<style jsx="">{`
		a {
			color: ${colors.WHITE};
			text-decoration: none;
		}

		a:hover {
			text-decoration: none;
			opacity: 0.6;
		}
	`}</style>
);
