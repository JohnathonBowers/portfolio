import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Path to Next.js app; allows Jest to load next.config.js and .env files into test environment
    dir: './',
});

const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
