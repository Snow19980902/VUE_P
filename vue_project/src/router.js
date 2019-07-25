// 导入路由包
import VueRouter from 'vue-router'

// 导入 tabbar 的组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import cartContainer from './components/tabbar/cartContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/PhotoList.vue'
import photoInfo from './components/photos/PhotoInfo.vue'
import goodsList from './components/goods/GoodsList.vue'
import goodsInfo from './components/goods/GoodsInfo.vue'


// 创建路由
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: homeContainer },
    { path: '/menber', component: memberContainer },
    { path: '/cart', component: cartContainer },
    { path: '/search', component: searchContainer },
    { path: '/home/newslist', component: newsList },
    { path: '/home/newsinfo/:id', component: newsInfo },
    { path: '/home/photolist', component: photoList },
    { path: '/home/photoinfo/:id', component: photoInfo },
    { path: '/home/goodslist', component: goodsList },
    { path: '/home/goodsinfo/:id', component: goodsInfo },
  ],
  linkActiveClass: 'mui-active'
})

// 导出路由
export default router
