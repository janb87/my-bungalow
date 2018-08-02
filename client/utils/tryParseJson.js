export default function tryParseJson (value) {
	try {
		return JSON.parse(value);
	} catch (err) {
		return value;
	}
}
