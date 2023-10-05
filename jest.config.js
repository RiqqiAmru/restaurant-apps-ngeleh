const config={
  verbose: true,
  testMatch: ['**/test/**/*.[jt]s'],

  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  setupFiles: ['fake-indexeddb/auto'],
  testEnvironment: 'jsdom',
};
module.exports = config;


