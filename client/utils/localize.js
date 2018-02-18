module.exports = (name, translations = []) => {
	const translation = translations.find(item => item.name === name);
	return translation ? translation.value : `Unknown translation ${name}`;
};
