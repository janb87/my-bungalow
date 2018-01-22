import React from 'react';
import globalStyles from '../styles/global';
import Link from 'next/link';

export default () => (
	<div>
		<header>
			<nav>
				<Link href="/contact">
					<a>Contacteer ons</a>
				</Link>
			</nav>
		</header>
		<main />
		<style jsx>{`
			main {
				height: 100vh;
				background-image: url(./img/home-banner.jpg);
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center center;
			}
			@media (max-width: 600px) {
				div {
					background: blue;
				}
			}
		`}</style>
		{React.createElement(globalStyles)}
	</div>
);
