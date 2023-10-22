module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testMatch: ["<rootDir>/tests/**/*.(test|spec|e2e-spec).*"],
};
