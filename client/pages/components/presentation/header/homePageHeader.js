import React from 'react';
import localize from '../../../../utils/localize';
import { Link } from '../../../../routes';
import navLinkStyles from '../../../../styles/nav-link';

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
						margin: 20px 50px 20px;

						font-size: 1.2em;
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
