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
	multiLine = false,
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
			/>
		</div>,
		<style key="styles" jsx="">{`
			.form-field {
				min-width: 300px;
				margin: ${spacingMd()} 0;
			}
			.form-field > div {
				width: 100% !important;
			}
		`}</style>,
	];
};

export default FormInputField;
