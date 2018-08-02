import React from 'react';
import classnames from 'classnames';
import { spacingMd } from '../../../../styles/spacing';

const Alert = ({ show, children, onDismiss, type = 'success' }) => {
	const classes = classnames('alert', {
		visible: show,
		warning: type === 'warning',
	});
	return [
		<div key="alert" className={classes}>
			{children}
		</div>,
		<style key="styles" jsx="">{`
			.alert {
				display: none;
				margin: ${spacingMd()} 0;
			}

			.visible {
				display: block;
			}
		`}</style>,
	];
};

export default Alert;
