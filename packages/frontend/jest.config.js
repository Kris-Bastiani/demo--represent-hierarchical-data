module.exports = {
	collectCoverage: true,
	coveragePathIgnorePatterns: ['/node_modules/'],
	testEnvironment: 'jsdom',
	transform: { '^.+\\.js$': 'babel-jest' },
};
