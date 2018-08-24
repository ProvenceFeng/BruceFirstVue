const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let extractCSS = new ExtractTextPlugin('[name].css');
module.exports = {
  devtool: '#source-map',
  mode: "development",
  entry: { bundle: "./src/index.js" },
  // string | object | array
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "[name].js", // string
    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', "stage-0"]
        }
      }, {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("css-loader!less-loader", "style")
      }, {
        test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
      }
    ]
  },
  plugins: [
    extractCSS,
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js'], //后缀名自动补全
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },

}
