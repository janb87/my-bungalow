import React from 'react';
import localize from '../../../utils/localize';
import colors from '../../../styles/colors';
import { Link } from '../../../routes';
import navLinkStyles from '../../../styles/nav-link';
import { spacingLg } from '../../../styles/spacing';
import screenSizes from '../../../styles/screenSizes';

const Nav = ({ lang, translations, stickToBottom, maxWidth }) => {
	// TODO: localize urls
	return (
		<nav className="main-nav">
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
				.main-nav {
					background: ${stickToBottom ? colors.gray_light : colors.green};

					${stickToBottom
						&& `
						position: absolute;
						top: 53px;
						right: 0;
						left: 0;
						`};
				}

				.main-nav > ul {
					display: flex;
					height: 100%;
					width: 100%;
					margin: 0 auto;
					padding: 0;
					flex-direction: column;

					list-style-type: none;
					${maxWidth && `max-width: ${maxWidth};`}
				}

				.main-nav > ul > li {
					flex: 1;
					display: flex;
					margin: ${spacingLg()} 0 0;

					font-size: 1em;
					align-items: center;
					justify-content: center;
				}

				.main-nav > ul > li:last-child {
					margin-bottom: ${spacingLg()};
				}

				@media (min-width: ${screenSizes.SM_MIN}) {
					.main-nav {
						height: 101px;

						${stickToBottom
							&& `
							top: inherit;
							bottom: 0;
							`};
					}

					.main-nav > ul {
						flex-direction: row;
					}

					.main-nav > ul > li {
						margin: 0;
						font-size: 1.4em;

						border-right: 1px solid ${colors.white};
					}

					.main-nav > ul > li:last-child {
						border-right: none;
						margin-bottom: 0;
					}
				}
			`}</style>
			{React.createElement(navLinkStyles, {
				selector: '.main-nav',
			})}
		</nav>
	);
};

export default Nav;
