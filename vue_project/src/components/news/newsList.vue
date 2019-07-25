<template>
  <div class="news_container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item._id">
        <router-link :to="'/home/newsinfo/'+ item._id">
          <img class="mui-media-object mui-pull-left" :src="item.url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.add_time | dateF }}</span>
              <span>点击: {{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: {}
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("getnewslist").then(result => {
        this.newsList = result.body
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

