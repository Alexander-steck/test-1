
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: `img/${filename('[ext]')}`//'img/[hash][ext][query]'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    
    
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
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
        use:[MiniCssExtractPlugin.loader,'css-loader']
        
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource'
      }
         
    ]

  },
  
};

