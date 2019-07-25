<template>
  <div class="photo_container">
    <!-- 导航栏区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active">推荐</a>
          <a class="mui-control-item">热点</a>
          <a class="mui-control-item">北京</a>
          <a class="mui-control-item">社会</a>
          <a class="mui-control-item">娱乐</a>
          <a class="mui-control-item">娱乐</a>
          <a class="mui-control-item">娱乐</a>
          <a class="mui-control-item">娱乐</a>
          <a class="mui-control-item">娱乐</a>
        </div>
      </div>
    </div>

    <!-- 图片区域 -->
    <ul>
      <router-link
        v-for="item in photolist"
        :key="item._id"
        tag="li"
        :to="'/home/photoinfo/' + item._id"
      >
        <img v-lazy="item.url">
        <div class="photo_title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      photolist: {} //存储自身的图片列表数据
    };
  },
  created() {
    this.getPhotoList();
  },
  mounted() {
    // Dom 加载完成的时候初始化滑动插件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    // 获取图片列表数据
    getPhotoList() {
      this.$http.get("getphotolist").then(result => {
        this.photolist = result.body;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo_container {
  ul {
    list-style: none;
    padding: 0;
    margin: 0 10px;
    li {
      position: relative;
      margin-bottom: 10px;
      box-shadow: 0px 0px 4px #ccc;
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      img {
        width: 100%;
        vertical-align: middle;
      }
      .photo_title {
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        max-height: 80px;
        h3 {
          font-size: 14px;
          text-align: center;
        }
        p {
          color: #fff;
          font-size: 12px;
          padding: 5px;
        }
      }
    }
  }
}
</style>

