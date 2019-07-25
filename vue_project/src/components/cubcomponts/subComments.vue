<template>
  <div class="subcmt_container">
    <h3 class="title">发表评论</h3>
    <textarea maxlength="120" placeholder="最多输入120个字"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt_list" v-for="(item, i) in contents" :key="item._id">
      <div class="cmt_title">第{{ i + 1 }}楼&nbsp;&nbsp;用户:{{ item.name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateF }}</div>
      <div class="cmt_body">{{ item.content }}</div>
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contents: {}
    };
  },
  created() {
    this.getComment()
  },
  methods: {
    getComment() {
      this.$http.get('pinglun').then(result => {
        this.contents = result.body
        // console.log(result.body)
      })
    }
  },
  // 根据 id 获取当前文章的 所有评论
  props: ["id"]
};
</script>
<style lang="scss" scoped>
.subcmt_container {
  .title {
    font-size: 16px;
  }
  textarea {
    font-size: 12px;
  }
  .cmt_list {
    margin: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    .cmt_body {
      text-indent: 2em;
    }
  }
}
</style>
