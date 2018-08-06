module.exports = function createValidationError (errors) {
	const error = new Error();
	error.name = 'ValidationError';
	error.errors = errors;
	return error;
};
