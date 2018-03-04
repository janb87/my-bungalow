import React from 'react';
import App from './components/container/app';
import { getJson, postJson } from '../utils/ajax';
import localize from '../utils/localize';
import { spacingXlg } from '../styles/spacing';
import FormInputField from './components/presentation/form/formInputField';
import Button from './components/presentation/common/button';

const Contact = class extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	render () {
		const { config, userAgent } = this.props;
		const { name, email, message } = this.state;

		return [
			<App key="app" config={config} userAgent={userAgent}>
				<div className="contact">
					<h1>{localize('contact_title', config.translations)}</h1>
					<p>{localize('contact_description', config.translations)}</p>
					<FormInputField
						name="name"
						labelResourceId="contact_name"
						translations={config.translations}
						onChange={newValue => this._onFieldChange('name', newValue)}
						value={name}
					/>
					<FormInputField
						name="email"
						labelResourceId="contact_email"
						translations={config.translations}
						onChange={newValue => this._onFieldChange('email', newValue)}
						value={email}
					/>
					<FormInputField
						name="message"
						labelResourceId="contact_message"
						multiLine={true}
						translations={config.translations}
						onChange={newValue => this._onFieldChange('message', newValue)}
						value={message}
					/>
					<div
						className="g-recaptcha"
						data-sitekey="6LdTZkoUAAAAAH6WF4Tme49Lvp0l8LDD6sx5E9m7"
					/>
					<Button
						labelResourceId="contact_submit"
						translations={config.translations}
						onClick={() => this._submitForm()}
					/>
				</div>
			</App>,
			<style key="styles" jsx="">{`
				.contact {
					margin: ${spacingXlg()};
				}
			`}</style>,
		];
	}

	_onFieldChange (fieldName, newValue) {
		this.setState({
			[fieldName]: newValue,
		});
	}

	async _submitForm () {
		postJson('/api/contact', this.state)
			.then(() => {
				// TODO: Success message
			})
			.catch(error => {
				// TODO: error messages
				console.log(error);
			});
	}
};

Contact.getInitialProps = async ({ req, query: { lang } }) => {
	const { translations, settings } = await getJson(
		req,
		`/api/${encodeURIComponent(lang)}/config`
	);
	return {
		config: { lang, translations, settings },
		userAgent: req && req.headers['user-agent'],
	};
};

export default Contact;
