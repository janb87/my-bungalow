import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from '../../../routes';
import globalStyles from '../../../styles/global';
import localize from '../../../utils/localize';
import Nav from '../presentation/nav';
import navLinkStyles from '../../../styles/nav-link';

const App = ({
	config: { lang = 'nl', translations, settings },
	backgroundImage,
	children,
	bottomNav = false,
}) => {
	const background
		= backgroundImage || settings.headerBackgroundImage || '/img/home-banner.jpg';

	return (
		<MuiThemeProvider>
			<div className="app">
				<header>
					{!bottomNav ? (
						<Nav lang={lang} translations={translations} />
					) : (
						<nav className="top-nav">
							<Link route="contact" params={{ lang }}>
								<a>{localize('contact_title', translations)}</a>
							</Link>
						</nav>
					)}
				</header>
				<main>
					{children}
					{bottomNav ? <Nav lang={lang} translations={translations} /> : null}
				</main>
				<style jsx="">{`
					header > nav.top-nav > a {
						float: right;
						margin: 20px 50px 20px;

						font-size: 1.2em;
					}

					main {
						height: 100vh;
						background-image: url(${background});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
					}
				`}</style>
				{React.createElement(navLinkStyles)}
				{React.createElement(globalStyles)}
			</div>
		</MuiThemeProvider>
	);
};

export default App;
