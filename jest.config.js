/** @returns {import('jest').Config} */
export default {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
};
