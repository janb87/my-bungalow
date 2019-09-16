import React from 'react';
import classnames from 'classnames';
import { spacingXlg, spacingLg } from '../../../styles/spacing';
import colors from '../../../styles/colors';

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
				margin: ${spacingXlg()} 0;
				padding: ${spacingLg()};

				color: ${colors.white};
				background-color: ${colors.success};
				text-align: center;
			}

			.visible {
				display: block;
			}
		`}</style>,
	];
};

export default Alert;
