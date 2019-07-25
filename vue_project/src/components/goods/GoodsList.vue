<template>
  <div class="goodslist-container">
    <div class="item" @click="goGoodsInfo(item._id)" v-for="item in goodslist" :key="item._id">
      <img :src="item.url" alt>
      <h1 class="title">{{ item.title }}}</h1>
      <div class="box">
        <p class="pirce">
          <span class="now">{{ item.pirce_now }}</span>
          <span class="old">{{ item.pirce_old }}</span>
        </p>
        <p class="info">
          <span>{{ item.hot }}</span>
          <span>{{ item.num }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: {}
    };
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 点击商品时. 跳转对应的商品信息页面
    goGoodsInfo(id) {
      this.$router.push("/home/goodsinfo/" + id);
    },

    // 获取所有的商品列表
    getGoodsList() {
      this.$http.get("getgoodslist").then(result => {
        this.goodslist = result.body
      });
    }

  }
};
</script>

<style lang="scss" scoped>
.goodslist-container {
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 49%;
    border: 1px solid #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
      padding: 5px;
      font-weight: 400;
      line-height: 20px;
    }
    .box {
      background: rgba(204, 190, 190, 0.2);
      p {
        margin: 0;
        padding: 5px;
      }
      .pirce {
        font-size: 12px;
        .now {
          font-size: 16px;
          color: red;
        }
        .old {
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
