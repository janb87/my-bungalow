module.exports = [
	'language_not_found',
	'homepage_not_found',
].reduce((acc, curr) => {
	return {
		...acc,
		[curr.toUpperCase()]: curr,
	};
}, {});
