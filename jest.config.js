module.exports = {
    moduleFileExtensions: [
        'js',
    ],
    modulePathIgnorePatterns: [
        'init-tests.js',
        'contracts/',
        '__tests__/_/',
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
};
