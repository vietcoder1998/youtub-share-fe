// jest.config.js
export default {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  setupFiles: ["./jest.setup.js"],
  preset: "ts-jest/presets/default-esm",
  transform: {},
  testPathIgnorePatterns: ["<rootDir>/src/config/*.ts"],
  transform: {
    '^.+\\ts$': 'babel-jest',
  }
};
