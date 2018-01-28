import React from 'react';
import 'isomorphic-unfetch';
import Link from 'next/link';
import globalStyles from '../styles/global';
import colors from '../styles/colors';
import { getJson } from '../utils/ajax';

const HomePage = ({ message, backgroundImage, query: { lang } }) => (
	<div>
		<header>
			<nav className="top-nav">
				<Link href={`/${lang}/contact`}>
					<a>Contacteer ons</a>
				</Link>
			</nav>
		</header>
		<main>
			<div className="message">
				<p>{message}</p>
			</div>
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

			main > .message {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: calc(100% - 100px);
				margin: 0 0 0 50px;

				font-size: 2em;
				color: ${colors.WHITE};
			}

			.bottom-nav {
				height: 101px;
			}

			.bottom-nav > ul {
				display: flex;
				height: 100%;
				margin: 0;
				padding: 0;

				list-style-type: none;

				background: rgba(0, 0, 0, 0.5);
			}

			.bottom-nav > ul > li {
				flex: 1;
				display: flex;

				font-size: 1.4em;
				align-items: center;
				justify-content: center;

				border-right: 1px solid ${colors.WHITE};
			}

			.bottom-nav > ul > li:last-child {
				border-right: none;
			}
		`}</style>
		{React.createElement(globalStyles)}
	</div>
);

HomePage.getInitialProps = async ({ req, query }) => {
	// TODO: error handling (eg wrong language)
	const { message, backgroundImage } = await getJson(
		req,
		`/api/${encodeURIComponent(query.lang)}/home-page`
	);
	return { message, backgroundImage, query };
};

export default HomePage;
