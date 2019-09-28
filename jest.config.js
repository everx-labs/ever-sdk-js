module.exports = {
	moduleFileExtensions: [
		'js',
	],
	modulePathIgnorePatterns: [
		'init-tests.js',
        'contracts\/'
	],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
	],
};
