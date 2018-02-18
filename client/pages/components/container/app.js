import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import globalStyles from '../../../styles/global';
import Nav from '../presentation/nav';
import navLinkStyles from '../../../styles/nav-link';

const App = ({
	config: { lang, translations, settings },
	backgroundImage,
	children,
	stickMenuToBottom = false,
	header,
}) => {

	return (
		<MuiThemeProvider>
			<div className="app">
				<header>
					{header}
				</header>
				<main>
					<Nav stickToBottom={stickMenuToBottom} lang={lang} translations={translations} />
					{children}
				</main>
				<style jsx="">{`
					main {
						height: 100vh;
						${backgroundImage && `background-image: url(${backgroundImage});`}
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
