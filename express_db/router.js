/**
 * 路由模块
 * 根据请求方式和请求路径, 处理请求并响应
 */
const express = require('express')
const Project = require('./project')

// 创建路由
const router = express.Router()

// 获取轮播图
router.get('/lunbotu', (req, res, next) => {
  Project.find({ name: "lunbotu" }).then(function (data) {
    console.log(data)
    return res.send(data)
  })
})

// 获取新闻列表
router.get('/getnewslist', (req, res, next) => {
  Project.find({ name: 'getnewslist' }).then(function (data) {
    return res.send(data)
  })
})

// 根据id获取信息
router.get('/getnewinfo', (req, res, next) => {
  var id = req.query.id
  Project.find({ _id: id.replace(/\'/g, '') }).then(function (data) {
    return res.send(data)
  })
})

// 获取所有评论
router.get('/pinglun', (req, res, next) => {
  Project.find({ name: 'pinglun' }).then(function (data) {
    // console.log(data)
    return res.send(data)
  })
})

// 获取所有的图片
router.get('/getphotolist', (req, res, next) => {
  Project.find({ name: 'photolist' }).then(function (data) {
    // console.log(data)
    return res.send(data)
  })
})

// 根据id 获取单个图片信息
router.get('/getphotoinfobyid', (req, res, next) => {
  let id = req.query.id.replace(/\`/g, '')
  Project.find({ _id: id }).then(function (data) {
    // console.log(data)
    return res.send(data)
  })
})

// 获取所有商品
router.get('/getgoodslist', (req, res, next) => {
  Project.find({ name: 'goodlist' }).then(function (data) {
    return res.send(data)
  })
})

// 根据id 获取单个图片信息
router.get('/getgoodslistbyid', (req, res, next) => {
  let id = req.query.id.replace(/\`/g, '')
  Project.find({ _id: id }).then(function (data) {
    return res.send(data)
  })
})

// 根据id 获取单个图片信息
router.get('/id', (req, res, next) => {
  var id = req.query.id.replace(/\`/g, '')

  // 把id 分割成数组
  var idArr = id.split(',')
  // 存储获取的数据
  var dataArr = []
  idArr.forEach((item, i) => {

    Project.find({ _id: item })
    .then((data) => {
      dataArr.push(data[0])
      if (idArr.length === i+1) return res.send(dataArr)
    })
  });
})



// 导出路由
module.exports = router
