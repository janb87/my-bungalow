import React from 'react';
import localize from '../../../utils/localize';
import { Link } from '../../../routes';

const HomePageHeader = ({ lang, translations }) => {
	return (
		<nav className="top-nav">
			<Link route="contact" params={{ lang }}>
				<a>{localize('contact_title', translations)}</a>
			</Link>
			<style jsx="">
				{`
					nav.top-nav > a {
						float: right;
						margin: 20px 50px 20px;

						font-size: 1.2em;
					}
				`}
			</style>
		</nav>
	);
};

export default HomePageHeader;
