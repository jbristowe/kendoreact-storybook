const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  // config.module.rules.push({
  //   test: /\.(ts|tsx)?$/,
  //   loaders: [{
  //     loader: require.resolve('@storybook/addon-storysource/loader'),
  //     options: { parser: 'typescript' }
  //   }],
  //   enforce: 'pre',
  // });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};