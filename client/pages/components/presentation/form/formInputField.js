import React from 'react';
import localize from '../../../../utils/localize';
import { spacingMd } from '../../../../styles/spacing';
import TextField from 'material-ui/TextField';

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
				errorText={error && error.message}
				fullWidth={fullWidth}
				hintStyle={{
					top: '36px',
				}}
				type={type}
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
