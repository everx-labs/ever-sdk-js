module.exports = {
	moduleFileExtensions: [
		'js',
	],
	modulePathIgnorePatterns: [
		'init.js',
	],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
	],
};
