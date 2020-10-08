const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  resetMocks: true,
  verbose: false,
  collectCoverage: false,
};

if (process.env.IM && process.env.IM === "true") {
  config.globals = {
    "ts-jest": {
      isolatedModules: true,
    },
  };
}

module.exports = config;
