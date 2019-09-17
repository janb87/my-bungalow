import React from 'react';
import classnames from 'classnames';
import localize from '../../../utils/localize';
import { Link } from '../../../routes';
import screenSizes from '../../../styles/screenSizes';
import colors from '../../../styles/colors';
import { spacingMd, spacingLg, spacingXlg } from '../../../styles/spacing';

const DefaultHeader = ({ lang, translations, activeRoute }) => {
	const contactClasses = classnames({
		active: activeRoute === '/contact',
	});
	return (
		<nav className="default-header-nav">
			<Link route="contact" params={{ lang }}>
				<a className={contactClasses}>{localize('contact_title', translations)}</a>
			</Link>
			<Link route="home" params={{ lang }}>
				<a>{localize('home_title', translations)}</a>
			</Link>
			<style jsx="">
				{`
					nav.default-header-nav {
						max-width: ${screenSizes.LG_MIN};
						margin: ${spacingMd()} auto;
						text-align: right;
					}
					nav.default-header-nav > a {
						font-size: 1em;
						margin: 0 ${spacingLg()};
					}
					nav.default-header-nav > a.active {
						color: ${colors.green_dark};
						pointer-events: none;
					}

					nav.default-header-nav > a:not(:last-child) {
						margin-right: 0;
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
