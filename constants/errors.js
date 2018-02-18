module.exports = [
	'language_not_found',
	'homepage_not_found',
	'contact_submit_error',
].reduce((acc, curr) => {
	return {
		...acc,
		[curr.toUpperCase()]: curr,
	};
}, {});
