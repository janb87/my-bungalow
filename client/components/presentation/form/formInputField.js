import React from 'react';
import localize from '../../../utils/localize';
import { spacingMd } from '../../../styles/spacing';
import TextField from 'material-ui/TextField';
import localizeError from '../../../utils/localizeError';

const FormInputField = ({
	name,
	labelResourceId,
	translations,
	onChange,
	value,
	error,
	multiLine = false,
	fullWidth = true,
	type = 'text',
	required = false,
}) => {
	return [
		<div key="field" className="form-field">
			<TextField
				name={name}
				hintText={localize(labelResourceId, translations)}
				floatingLabelText={localize(labelResourceId, translations)}
				floatingLabelFixed={false}
				multiLine={multiLine}
				rows={multiLine ? 5 : undefined}
				onChange={(e, value) => onChange(value)}
				value={value}
				errorText={localizeError(error, translations)}
				fullWidth={fullWidth}
				hintStyle={{
					top: '36px',
				}}
				type={type}
				required={required}
			/>
		</div>,
		<style key="styles" jsx="">{`
			.form-field {
				min-width: 300px;
				margin: 0 0 ${spacingMd()} 0;
			}
		`}</style>,
	];
};

export default FormInputField;
