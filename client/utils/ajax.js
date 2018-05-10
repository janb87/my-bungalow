import 'isomorphic-unfetch';

function getBaseUrl (req) {
	if (!req) {
		return '';
	}
	const host = req.get('Host');
	if (host !== 'localhost') {
		return 'https://my-bungalow.herokuapp.com';
	}
	return req ? `${req.protocol}://${host}` : '';
}

function getFullUrl (baseUrl, url, query = {}) {
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
	return fullUrl;
}

export async function getJson (req, url, query = {}) {
	const baseUrl = getBaseUrl(req);
	const fullUrl = getFullUrl(baseUrl, url, query);
	const res = await fetch(fullUrl);
	return await res.json();
}

export function postJson (url, body = {}) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.onreadystatechange = () => {
			if (xhr.readyState > 3) {
				xhr.status === 200
					? resolve(xhr.responseText)
					: reject(new Error(xhr.responseText));
			}
		};
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(body));
	});
}
