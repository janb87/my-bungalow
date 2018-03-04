import React from 'react';
import localize from '../../../../utils/localize';
import { Link } from '../../../../routes';
import screenSizes from '../../../../styles/screenSizes';
import { spacingLg, spacingXlg } from '../../../../styles/spacing';

const DefaultHeader = ({ lang, translations }) => {
	return (
		<nav className="default-header-nav">
			<Link route="home" params={{ lang }}>
				<a>{localize('home_title', translations)}</a>
			</Link>
			<style jsx="">
				{`
					nav.default-header-nav {
						max-width: ${screenSizes.LG_MIN};
						margin: ${spacingLg()} auto;
					}
					nav.default-header-nav > a {
						font-size: 1.2em;
						margin: 0 ${spacingXlg()};
					}
				`}
			</style>
		</nav>
	);
};

export default DefaultHeader;
