/**
 * 入口模块
 * 创建服务
 * 配置静态服务
 * 配置第三方包
 * 监听端口
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')

/**
 * 创建服务
 */
const app = express()

/**
 * 处理静态服务
 */
app.use('/public/', express.static(path.join(__dirname, './public/')))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "content-type")
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
  next()
})

/**
 * 配置第三方包
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/**
 * 挂载路由
 */
app.use(router)

/**
 * 配置处理 404 的中间件
 */
app.use(function (req, res, next) {
  res.send('404')
})
/**
 * 配置全局错误处理中间件
 */
app.use(function (err, req, res, next) {
  res.status(500).send(err.message)
})

/**
 * 监听端口
 */
app.listen(3000, function () {
  console.log('Server http://localhost:3000/ ')
})
