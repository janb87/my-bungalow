import React from 'react';
import localize from '../../../../utils/localize';
import { Link } from '../../../../routes';
import screenSizes from '../../../../styles/screenSizes';
import { spacingMd, spacingLg, spacingXlg } from '../../../../styles/spacing';

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
						margin: ${spacingMd()} auto;
					}
					nav.default-header-nav > a {
						font-size: 1em;
						margin: 0 ${spacingLg()};
					}

					@media (min-width: ${screenSizes.SM_MIN}) {
						nav.default-header-nav {
							margin: ${spacingLg()} auto;
						}
						nav.default-header-nav > a {
							font-size: 1.2em;
							margin: 0 ${spacingXlg()};
						}
					}
				`}
			</style>
		</nav>
	);
};

export default DefaultHeader;
