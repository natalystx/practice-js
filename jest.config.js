// jest.config.js
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/tests/**/*.test.js"],
  watchPathIgnorePatterns: ["/node_modules/"],
};
