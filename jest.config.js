module.exports = {
    roots: ['./'],
    verbose: true,
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
    moduleFileExtensions: ['js', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
};
