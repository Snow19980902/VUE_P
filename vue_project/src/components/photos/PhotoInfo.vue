<template>
  <div class="info_container">
    <!-- 标题 -->
    <h1>{{ infoList.title }}</h1>
    <div class="info_subtitle">
      <span>评论时间: {{ infoList.add_time }}</span>
      <span>点击0次</span>
    </div>
    <hr>

    <!-- 略缩图 -->
    <div class="info_photo">
      <vue-preview :slides="list"></vue-preview>
    </div>

    <!-- 评论列表 -->
    <subComponents></subComponents>
  </div>
</template>
<script>
import subComponents from "../cubcomponts/subComments.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      infoList: {},
      list: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhotoInfoById();
  },
  methods: {
    getPhotoInfoById() {
      // 根据 id 获取图片信息
      this.$http.get("getphotoinfobyid?id=" + this.id).then(result => {
        this.infoList = result.body[0];
      });
    }
  },
  components: {
    subComponents
  }
};
</script>
<style lang="scss">
.info_container {
  margin: 0 5px;
  h1 {
    font-size: 16px;
    color: red;
    text-align: center;
  }
  .info_subtitle {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 12px;
  }
  .info_photo {
    figure {
      width: 33.3333%;
      margin: 0px;
      padding: 0px;
      display: inline-block;
      a {
        img {
          display: block;
          width: 96%;
          margin: 0 auto;
          box-shadow: 0 0 2px rgba(0, 0, 0, .5)
        }
      }
    }
  }
}
</style>

