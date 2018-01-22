import React from 'react';
import globalStyles from '../styles/global';
import colors from '../styles/colors';
import Link from 'next/link';

export default () => (
	<div>
		<header>
			<nav className="top-nav">
				<Link href="/contact">
					<a>Contacteer ons</a>
				</Link>
			</nav>
		</header>
		<main>
			<div className="message">
				<p>Even tot rust komen in de prachtige omgeving van Durbuy.</p>
			</div>
			<nav className="bottom-nav">
				<ul>
					<li>
						<Link href="/de-bungalow">
							<a>De bungalow</a>
						</Link>
					</li>
					<li>
						<Link href="/het-park">
							<a>Het park</a>
						</Link>
					</li>
					<li>
						<Link href="/in-de-omgeving">
							<a>In de omgeving</a>
						</Link>
					</li>
					<li>
						<Link href="/reserveer">
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
				background-image: url(./img/home-banner.jpg);
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

				font-size: 1.6em;
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
