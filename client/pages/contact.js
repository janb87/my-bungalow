import React from 'react';
import App from './components/container/app';

const Contact = ({ lang }) => [
	<App key="app" lang={lang}>
		<div className="contact">
			<p>Contact</p>
		</div>
	</App>,
	<style key="styles" jsx="">{`
		.contact {
			color: tomato;
		}
	`}</style>,
];

Contact.getInitialProps = async ({ query: { lang } }) => {
	return { lang };
};

export default Contact;
