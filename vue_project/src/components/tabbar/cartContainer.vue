<template>
  <div class="cart-container">
    <div class="mui-card" v-for="(item, i) in shopCartData" :key="item._id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch
            v-model="$store.getters.getSelected[item._id]"
            @change="
              selectenChanged(item._id, $store.getters.getSelected[item._id])
            "
          ></mt-switch>
          <img :src="item.url" alt="" />
          <div class="box">
            <h1>{{ item.title }}</h1>
            <p class="info">
              <span class="price">${{ item.pirce_now }}</span>
              <numbox
                :count="$store.getters.getShopCartCount[item._id]"
                :id="item._id"
              ></numbox>
              <a href="#" @click="remove(item._id, i)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          选中: {{ $store.getters.getSelectedCount }}
          总金额: {{ $store.getters.getSelectedCountPrice }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import numbox from "../cubcomponts/CartNumBox.vue";
export default {
  data() {
    return {
      shopCartData: []
    };
  },
  created() {
    this.getShopCartId();
  },
  methods: {
    // 根据 id 获取数据
    getShopCartId() {
      // 获取 state 的数据上的 id, 根据 id 获取数据库数据
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));

      // 判断 id 是否存在
      if (idArr.length <= 0) return;

      // 根据 id 获取数据
      this.$http.get("id?id=" + idArr.join(",")).then(result => {
        this.shopCartData = result.body;
      });
    },

    // 根据 id 删除商品
    remove(id, index) {
      this.shopCartData.splice(index, 1);
      this.$store.commit("removeShop", id);
    },

    // 
    selectenChanged(id, selected) {
     this.$store.commit('updataGoodsSelected', {
       id: id,
       selected: selected
     })
    }
  },
  components: {
    numbox
  }
};
</script>
<style lang="scss" scoped>
.cart-container {
  background: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    padding: 10px;
    display: flex;
    align-items: center;
    img {
      height: 60px;
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 13px;
      }
      .info {
        display: flex;
        flex-wrap: wrap;
        a {
          padding-left: 2px;
        }
        .price {
          padding-right: 2px;
        }
      }
    }
  }
}
</style>

