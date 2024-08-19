module.exports = {
    // Other configurations...
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',

  };
  