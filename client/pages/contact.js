import React from 'react';
import App from './components/container/app';
import { getJson, postJson } from '../utils/ajax';
import localize from '../utils/localize';
import { spacingLg, spacingXlg } from '../styles/spacing';
import FormInputField from './components/presentation/form/formInputField';
import Button from './components/presentation/common/button';
import LoaderCurtain from './components/presentation/common/loaderCurtain';
import screenSizes from '../styles/screenSizes';
import tryParseJson from '../utils/tryParseJson';
import Alert from './components/presentation/common/alert';

const INITIAL_STATE = {
	errors: undefined,
	name: '',
	email: '',
	message: '',
	isSubmitting: false,
	isSubmitted: false,
};

const Contact = class extends React.Component {
	constructor (props) {
		super(props);

		this.state = INITIAL_STATE;

		this._onSubmit = this._onSubmit.bind(this);
	}

	render () {
		const { config, userAgent } = this.props;
		const { name, email, message, isSubmitting, isSubmitted, errors } = this.state;
		const errorsObj = typeof errors === 'object' ? errors : {};

		return [
			<App key="app" config={config} userAgent={userAgent}>
				<LoaderCurtain show={isSubmitting} />
				<div className="contact">
					<h1>{localize('contact_title', config.translations)}</h1>
					<p>{localize('contact_description', config.translations)}</p>
					<Alert show={isSubmitted && !errors}>
						{localize('contact_success', config.translations)}
					</Alert>
					<form onSubmit={this._onSubmit}>
						<FormInputField
							name="name"
							labelResourceId="contact_name"
							translations={config.translations}
							onChange={newValue => this._onFieldChange('name', newValue)}
							value={name}
							error={errorsObj.name}
						/>
						<FormInputField
							name="email"
							labelResourceId="contact_email"
							translations={config.translations}
							onChange={newValue => this._onFieldChange('email', newValue)}
							value={email}
							error={errorsObj.email}
						/>
						<FormInputField
							name="message"
							labelResourceId="contact_message"
							multiLine={true}
							translations={config.translations}
							onChange={newValue => this._onFieldChange('message', newValue)}
							value={message}
							error={errorsObj.message}
						/>
						{/* TODO: captcha
						<div
							className="g-recaptcha"
							data-sitekey="6LdTZkoUAAAAAH6WF4Tme49Lvp0l8LDD6sx5E9m7"
						/>
						*/}
						<Button
							labelResourceId="contact_submit"
							translations={config.translations}
							isSubmit={true}
						/>
					</form>
				</div>
			</App>,
			<style key="styles" jsx="">{`
				.contact {
					margin: ${spacingLg()};
				}
				@media (min-width: ${screenSizes.SM_MIN}) {
					.contact {
						margin: ${spacingXlg()};
					}
				}
			`}</style>,
		];
	}

	_onFieldChange (fieldName, newValue) {
		this.setState({
			[fieldName]: newValue,
		});
	}

	_onSubmit(e) {
		e.preventDefault();
		this._submitForm();
	}

	async _submitForm () {
		const { name, email, message } = this.state;
		this.setState({ isSubmitting: true, isSubmitted: false });
		postJson('/api/contact', { name, email, message })
			.then(() => {
				this.setState({ ...INITIAL_STATE, isSubmitted: true });
			})
			.catch(error => {
				this.setState({
					isSubmitting: false,
					isSubmitted: true,
					errors: tryParseJson(error.message),
				});
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
