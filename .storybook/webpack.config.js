const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};