const variables = require('./src/theme/variables.theme.ts');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    ],
    theme: {
      ...variables,
      extend: {},
    },
    plugins: [],
  };