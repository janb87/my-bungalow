import React from 'react';
import classnames from 'classnames';
import localize from '../../../utils/localize';
import colors from '../../../styles/colors';
import { Link } from '../../../routes';
import navLinkStyles from '../../../styles/nav-link';
import { spacingLg } from '../../../styles/spacing';
import screenSizes from '../../../styles/screenSizes';

const Nav = ({ lang, translations, stickToBottom, maxWidth, activeRoute }) => {
	// TODO: localize urls
	const routes = [
		{
			name: '/bungalow',
			route: `/${lang}/de-bungalow`,
			text: localize('menu_bungalow', translations),
		},
		{
			name: '/park',
			route: `/${lang}/het-park`,
			text: localize('menu_park', translations),
		},
		{
			name: '/nearby',
			route: `/${lang}/in-de-omgeving`,
			text: localize('menu_nearby', translations),
		},
		{
			name: '/book',
			route: `/${lang}/reserveer`,
			text: localize('menu_book', translations),
		},
	];
	return (
		<nav className="main-nav">
			<ul>
				{
					routes.map(({ name, route, text }) => {
						const classes = classnames({
							active: activeRoute === name,
						});
						return (
							<li className={classes} key={route}>
								<Link route={route}>
									<a>{text}</a>
								</Link>
							</li>
						);
					})
				}
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

				.main-nav > ul > li.active {
					background-color: ${colors.green_dark};
					pointer-events: none;
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
