const baseConfig = require("./jest.config.base");

module.exports = {
  ...baseConfig,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  collectCoverage: true,
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["json", "lcov", "clover"],
};
