const LARGE = 24;
const EXTRA_LARGE = 48;
const MEDIUM = 16;
const SMALL = 8;

export function spacing (...trbl) {
	return [...trbl].reduce((acc, current) => {
		return `${acc} ${current}px`.trim();
	}, '');
}

export function spacingXlg () {
	return spacing(EXTRA_LARGE);
}

export function spacingLg () {
	return spacing(LARGE);
}

export function spacingMd () {
	return spacing(MEDIUM);
}

export function spacingSmall () {
	return spacing(SMALL);
}
