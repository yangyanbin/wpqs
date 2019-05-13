var path = require('path'),
  CleanPlugin = require('clean-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
var mockPlugin = require('./mock/mock-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {//js
        test: /\.js$/,exclude: /node_modules/,loader: ["babel-loader","eslint-loader"]
      },
      {//css
        test: /\.css$/,loader: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {//image
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'assets/[name]-[hash].[ext]'
                }
            }
        ]
    },
    {//font
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'assets/[name]-[hash].[ext]'
                }
            }
        ]
    }
    ]
  },
  plugins:[
    new CleanPlugin(),
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "[name]-[hash].css"
    })
  ],
  devServer:{
        historyApiFallback: true,
        inline: true,
        port: 8080,
        // before:mockPlugin //open mock server
    }
};
