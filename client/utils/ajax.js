export async function getJson (req, url) {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(baseUrl + '/api/home-page');
	return await res.json();
}
