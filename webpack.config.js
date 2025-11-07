const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js')
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
      // если позже понадобится обработка изображений прямо в webpack — можно добавить loaders
    ]
  },
  optimization: {
    minimize: false
    // minimizer: [new TerserPlugin()]
  },
  resolve: {
    extensions: ['.js', '.mjs']
  }
};
