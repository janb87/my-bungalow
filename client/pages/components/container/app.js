import React from 'react';
import Link from 'next/link';
import globalStyles from '../../../styles/global';
import colors from '../../../styles/colors';

const App = ({ lang, backgroundImage, children }) => (
	<div>
		<header>
			<nav className="top-nav">
				<Link href={`/${lang}/contact`}>
					<a>Contacteer ons</a>
				</Link>
			</nav>
		</header>
		<main>
			{children}
			<nav className="bottom-nav">
				<ul>
					<li>
						<Link href={`/${lang}/de-bungalow`}>
							<a>De bungalow</a>
						</Link>
					</li>
					<li>
						<Link href={`/${lang}/het-park`}>
							<a>Het park</a>
						</Link>
					</li>
					<li>
						<Link href={`/${lang}/in-de-omgeving`}>
							<a>In de omgeving</a>
						</Link>
					</li>
					<li>
						<Link href={`/${lang}/reserveer`}>
							<a>Reserveer nu!</a>
						</Link>
					</li>
				</ul>
			</nav>
		</main>
		<style jsx>{`
			a {
				color: ${colors.WHITE};
				text-decoration: none;
			}

			a:hover {
				text-decoration: none;
				opacity: 0.6;
			}

			header > nav.top-nav > a {
				float: right;
				margin: 20px 50px 20px;

				font-size: 1.2em;
			}

			main {
				height: 100vh;
				background-image: url(${backgroundImage});
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center center;
			}

			.bottom-nav {
				height: 101px;
				margin-bottom: 1OOpx;
			}

			.bottom-nav > ul {
				display: flex;
				height: 100%;
				margin: 0;
				padding: 0;
				flex-direction: column;

				list-style-type: none;

				background: rgba(0, 0, 0, 0.5);
			}

			.bottom-nav > ul > li {
				flex: 1;
				display: flex;

				font-size: 1em;
				align-items: center;
				justify-content: center;

				border-right: 1px solid ${colors.WHITE};
			}

			.bottom-nav > ul > li:last-child {
				border-right: none;
			}

			@media (min-width: 768px) { 
				.bottom-nav {
					margin-bottom: 0;
				}
				.bottom-nav > ul {
					flex-direction: row;
				}
				.bottom-nav > ul > li {
					font-size: 1.4em;
				}
			}
		`}</style>
		{React.createElement(globalStyles)}
	</div>
);

export default App;
