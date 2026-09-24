module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    collectCoverage: true,

    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/models/produtos.ts'
    ],

    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    }
};