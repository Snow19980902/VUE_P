const mongoose = require('mongoose')
//  连接数据库
mongoose.connect('mongodb://localhost:27017/vue', { useNewUrlParser: true })

const Schema = mongoose.Schema

// 定义模型构造函数
const projectSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
})

// 导出模型构造函数
module.exports = mongoose.model('Project', projectSchema)