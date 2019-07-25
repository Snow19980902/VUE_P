<template>
  <div>
    <!-- 轮播图 -->
    <swipe :lunbotuList="lunbotuList" :isfull="true"></swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/photolist">
          <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="home/goodslist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-card"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import swipe from '../cubcomponts/Swipe.vue'
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    // 初始化时获取一次数据
    this.getlunbotu();
  },
  methods: {
    // 获取轮播图数据
    getlunbotu() {
      this.$http.get("lunbotu").then(result => {
        this.lunbotuList = result.body;
      });
    }
  },
  components: {
    swipe
  }
};
</script>
<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  margin-top: 6px;
  background-color: #fff;
  border: none;
  li {
    border: none;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>

