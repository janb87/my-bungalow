import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import colors from '../../../../styles/colors';

export default function Loader ({ show }) {
	return show ? <CircularProgress color={colors.white} size={80} thickness={5} /> : null;
}
