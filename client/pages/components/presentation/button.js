import React from 'react';
import localize from '../../../utils/localize';
import { spacingMd } from '../../../styles/spacing';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({ labelResourceId, translations, onClick }) => {
	return [
		<div key="button" className="button">
			<RaisedButton
				label={localize(labelResourceId, translations)}
				onClick={onClick}
			/>
		</div>,
		<style key="styles" jsx="">{`
			.button {
				margin: ${spacingMd()} 0;
			}
		`}</style>,
	];
};

export default Button;
