import React from 'react';
import App from './components/container/app';
import RaisedButton from 'material-ui/RaisedButton';
import { getJson } from '../utils/ajax';
import localize from '../utils/localize';

const Contact = (config) => [
	<App key="app" config={config}>
		<div className="contact">
			<p>{localize('contact_title', config.translations)}</p>
			<RaisedButton label="Default" />
		</div>
	</App>,
	<style key="styles" jsx="">{`
		.contact {
			height: calc(100% - 200px);
		}
	`}</style>,
];

Contact.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${encodeURIComponent(lang)}/config`
	);
	return { lang, translations, settings };
};

export default Contact;
