const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: ['@babel/polyfill','./src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  resolve: { extensions: ['.js', '.jsx','.ts','.tsx'] },
  mode:'production',
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-env'],
          },
        },
      },
      {
        test: /.tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript','@babel/preset-react','@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 8088,
    // host: '192.168.11.7',
  },
};