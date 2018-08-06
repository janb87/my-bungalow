import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import localize from '../../../../utils/localize';
import { spacingMd } from '../../../../styles/spacing';

const Button = ({ labelResourceId, translations, onClick, isSubmit = false }) => {
	return [
		<div key="button" className="button">
			<RaisedButton
				label={localize(labelResourceId, translations)}
				secondary={true}
				onClick={onClick}
				type={isSubmit ? 'submit' : 'button'}
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
