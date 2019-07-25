<template>
  <div class="newsinfo_container">
    <h1 class="title">{{ content.title }}</h1>
    <div class="sub_title">
      <span>发表时间: {{ content.add_time | dateF }}</span>
      <span>点击{{ content.click }}次</span>
    </div>
    <hr>
    <div class="content">{{ content.content }}</div>

    <subComments :id="this.id"></subComments>
    
  </div>
</template>

<script>
// 导入评论子组件
import subComments from '../cubcomponts/subComments.vue'

export default {
  data() {
    return {
      // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      id: this.$route.params.id, 
      // 新闻内容对象
      content: {}
    };
  },
  created() {
    // 初始化的时候调用一次这个方法
    this.getNewInfo()
  },
  methods: {
    getNewInfo() {// 获取新闻信息的方法
      this.$http.get("getnewinfo?id=" + this.id).then(result => {
        this.content = result.body[0]
      })
    }
  },
  components: {
    subComments,
  }
};
</script>
<style lang="scss" scoped>
.newsinfo_container {
  padding: 6px;
  .title {
    font-size: 18px;
    text-align: center;
    color: red;
  }
  .sub_title {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .content {
    font-size: 13px;
  }
}
</style>


