// jest.config.js
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.tsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
  };
  