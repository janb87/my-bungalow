export async function getJson (req, url, query = {}) {
	let baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	let fullUrl = baseUrl + url;
	Object.keys(query).forEach((key, index) => {
		let startChar = '&';
		if (index === 0) {
			startChar = '?';
		}
		fullUrl += `${startChar}${encodeURIComponent(key)}=${encodeURIComponent(
			query[key]
		)}`;
	});
	const res = await fetch(fullUrl);
	return await res.json();
}
