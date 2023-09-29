const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const {injectManifest: InjectManifest} = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  clean: true,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [new InjectManifest({
    swSrc: `${__dirname}/src/sw.js`,
    swDest: 'sw.js',
  })],
});
