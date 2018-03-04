import React from 'react';
import localize from '../../../../utils/localize';
import colors from '../../../../styles/colors';
import { Link } from '../../../../routes';
import navLinkStyles from '../../../../styles/nav-link';

const Nav = ({ lang, translations, stickToBottom, maxWidth }) => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link route={`/${lang}/de-bungalow`}>
						<a>{localize('menu_bungalow', translations)}</a>
					</Link>
				</li>
				<li>
					<Link route={`/${lang}/het-park`}>
						<a>{localize('menu_park', translations)}</a>
					</Link>
				</li>
				<li>
					<Link route={`/${lang}/in-de-omgeving`}>
						<a>{localize('menu_nearby', translations)}</a>
					</Link>
				</li>
				<li>
					<Link route={`/${lang}/reserveer`}>
						<a>{localize('menu_book', translations)}</a>
					</Link>
				</li>
			</ul>
			<style jsx="">{`
				.nav {
					height: 101px;
					margin-bottom: 100px;
					background: ${stickToBottom ? colors.LIGHT_GRAY : colors.PALETTE_1};

					${stickToBottom
						&& `
						position: absolute;
						bottom: 0;
						right: 0;
						left: 0;
						`};
				}

				.nav > ul {
					display: flex;
					height: 100%;
					width: 100%;
					margin: 0 auto;
					padding: 0;
					flex-direction: column;

					list-style-type: none;
					${maxWidth && `max-width: ${maxWidth};`}
				}

				.nav > ul > li {
					flex: 1;
					display: flex;

					font-size: 1em;
					align-items: center;
					justify-content: center;

					border-right: 1px solid ${colors.WHITE};
				}

				.nav > ul > li:last-child {
					border-right: none;
				}

				@media (min-width: 768px) {
					.nav {
						margin-bottom: 0;
					}
					.nav > ul {
						flex-direction: row;
					}
					.nav > ul > li {
						font-size: 1.4em;
					}
				}
			`}</style>
			{React.createElement(navLinkStyles)}
		</nav>
	);
};

export default Nav;
