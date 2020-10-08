const baseConfig = require("../../jest.config.base");

module.exports = {
  ...baseConfig,
  resetMocks: false,
  name: "package-2",
  displayName: "package-2",
  testMatch: [`${__dirname}/test/*.test.{ts,tsx}`],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
};
