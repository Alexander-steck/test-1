
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  mode: 'development',
  entry: './script/index.js',
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    
  },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      },
      
    }),
    
    
    new MiniCssExtractPlugin({filename: `./css/${filename('css')}`}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader,'css-loader']
      },
         
    ]

  },
  
};

