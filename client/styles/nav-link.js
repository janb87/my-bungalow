import React from 'react';
import colors from './colors';

export default ({ selector }) => (
	<style jsx="">{`
		${selector} a {
			color: ${colors.white};
			text-decoration: none;
		}

		${selector} a:hover {
			text-decoration: none;
			opacity: 0.6;
		}
	`}</style>
);
