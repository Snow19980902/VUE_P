const path = require('path')

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
const htmlWebpackPlugin = require('html-webpack-plugin')

const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),// 入口文件
  output: {
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 指定输出的文件名
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html'  // 指定内存生成的文件名
    }),
    new vueLoaderPlugin(),
  ],

  module: { // 配置所有第三方 loader 模块, rules 匹配第三份模块规则
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理 css 文件的loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理 less 文件的 loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//处理 scss 文件的 loader
      { test: /\.(jpg|jpeg|png|bmp)$/, use: ['url-loader?limit=5120&name=[hash:8]-[name].[ext]'] }, // 处理 图片 文件的 loader
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },// 处理 字体文件的 loader
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },//配置babel来转换高级的语法
      { test: /\.vue$/, use: 'vue-loader' }, // 配置处理 vue 的 loader
    ]
  }
}
