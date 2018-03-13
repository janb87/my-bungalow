import React from 'react';
import localize from '../../../../utils/localize';
import { Link } from '../../../../routes';
import navLinkStyles from '../../../../styles/nav-link';
import screenSizes from '../../../../styles/screenSizes';
import { spacingXlg, spacingMd } from '../../../../styles/spacing';

const HomePageHeader = ({ lang, translations }) => {
	return (
		<nav className="home-page-header-nav">
			<Link route="contact" params={{ lang }}>
				<a>{localize('contact_title', translations)}</a>
			</Link>
			<style jsx="">
				{`
					nav.home-page-header-nav > a {
						float: right;
						margin: ${spacingMd()} ${spacingMd()} ${spacingMd()};

						font-size: 1em;
					}

					@media (min-width: ${screenSizes.SM_MIN}) {
						nav.home-page-header-nav > a {
							margin: ${spacingMd()} ${spacingXlg()} ${spacingMd()};

							font-size: 1.2em;
						}
					}
				`}
			</style>
			{React.createElement(navLinkStyles, {
				selector: '.home-page-header-nav',
			})}
		</nav>
	);
};

export default HomePageHeader;
