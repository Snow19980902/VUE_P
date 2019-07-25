// 入口文件
import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vuex
import Vuex from 'vuex'

Vue.use(Vuex)


var car = JSON.parse(localStorage.getItem('car') || '[]')
// 创建实例
var store = new Vuex.Store({
  // this.$store.state.***
  state: {
    car: car
  },
  // this.$store.commit('Fun', 'params')
  mutations: {
    // 获取购物车保存的数据
    getShopCarData(state, goodsinfo) {
      // 首先从 localStoreage 获取总数据, 然后 根据id遍历总数据,如果有对应的产品
      // 则增加数量, 如果没有在 push 到数组中
      // 加入在购物车中没有找到商品, 根据 flag 状态决定是否 push 到数组中
      var flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += goodsinfo.count
          flag = true
          return true
        }
      })

      // 根据 flag 状态决定是否加入到数组中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      // 当购物车更新后, 保存到 localStoreage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },

    // 更新购物车单件商品的数量
    updataShopCartCount(state, goodsinfocount) {
      state.car.some((item, i) => {
        if (item.id == goodsinfocount.id) {
          state.car[i].count = parseInt(goodsinfocount.count)
          return true
        }
      })

      localStorage.setItem('car', JSON.stringify(state.car))
    },

    // 根据 id 删除商品
    removeShop(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },

    // 更新商品选中状态
    updataGoodsSelected(state, goodsinfo) {
      state.car.some((item, i) => {
        if (item.id == goodsinfo.id) {
          item.selected = goodsinfo.selected
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  // this.$store.getters.***
  getters: {
    // 购物车显示数量
    getCarNum(state) {
      var count = 0
      state.car.forEach(item => {
        count += item.count
      });
      return count
    },
    // 根据 id 索引值 获取当前数量
    getShopCartCount(state) {
      var countArr = []
      state.car.forEach(item => {
        countArr[item.id] = item.count
      })
      return countArr
    },
    // 获取select 的状态
    getSelected(state) {
      var selected = []
      state.car.forEach(item => {
        selected[item.id] = item.selected
      })
      return selected
    },
    // 计算选中的数量
    getSelectedCount(state) {
      var count = 0
      state.car.forEach(item => {
        if (item.selected === true) {
         
          count += item.count
        }
      })
      return count
    },
    // 计算选中数量的总金额
    getSelectedCountPrice(state) {
      var price = 0
      state.car.forEach(item => {
        if(item.selected === true) {
          price += item.count * item.price
        }
      })
      return price
    }
  },
})

// 导入 vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)
// 配置路由 API 根域名
Vue.http.options.root = 'http://localhost:3000'

// 导入格式化时间插件
import moment from 'moment'
Vue.filter('dateF', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(parseInt(dataStr)).format(pattern)
})



// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



// 导入 { Mint-UI, mui } 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Swipe, SwipeItem, Button, Lazyload, Switch } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload);
Vue.component(Switch.name, Switch)



// 导入自己的路由
import router from './router'

// 导入 app 根组件
import app from './App.vue'


// 创建实例
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store,
})
