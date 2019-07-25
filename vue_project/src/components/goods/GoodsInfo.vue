<template>
  <div class="goodsinfo-container">
    <!-- 轮播图 -->
    <div class="mui-card">
      <swipe :lunbotuList="goodsPhoto" :isfull="true"></swipe>
    </div>

    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价:
            <del class="old">{{ goodsInfo.pirce_old }}</del
            >&nbsp;&nbsp; 销售价:
            <span class="now">{{ goodsInfo.pirce_now }}</span>
          </p>
          <p>
            购买数量 :
            <numBox @getProductNum="getProductNum" :max="'15'"></numBox>
          </p>
          <p>
            <mt-button type="primary" size="normal">立即购买</mt-button>
            <mt-button type="danger" size="normal" @click="addShopCar"
              >加入购物车</mt-button
            >
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:SD436652EE</p>
          <p>库存情况:60件</p>
          <p>库存情况:60件</p>
          <p>库存情况:60件</p>
          <p>库存情况:60件</p>
          <p>库存情况:60件</p>
          <p>库存情况:60件</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="default" size="large" plain>default</mt-button>
        <mt-button type="primary" size="large" plain>primary</mt-button>
      </div>
    </div>

    <!-- 小球 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    <!-- 
      1. 创建小球并写样式
      2. 把小球定位到加入购物车位置
      3. 给加入购物车绑定一个点击事件  data 中 记录 显示和隐藏
      4. 创建 动画钩子函数 beforeEnter enter afterEnter 并给 transition @ 绑定
      5. 定位小球的 起始位置和 结束位置
      6. getboundingclientRact
    -->
  </div>
</template>

<script>
// 导入轮播图组件
import swipe from "../cubcomponts/Swipe.vue";
// 导入数字组件
import numBox from "../cubcomponts/NumBox.vue";

export default {
  data() {
    return {
      // 当前商品id
      id: this.$route.params.id,
      // 当前商品信息
      goodsInfo: {},
      // 当前商品轮播图数据
      goodsPhoto: {},
      // 控制小球的显示
      flag: false,
      // 选中的商品数量
      productNum: 1
    };
  },
  created() {
    this.getGoodsInfo();
    this.getLunbotu();
  },
  methods: {
    // 根据 id 获取单个商品
    getGoodsInfo() {
      this.$http.get("getgoodslistbyid?id=" + this.id).then(result => {
        this.goodsInfo = result.body[0];
      });
    },
    // 获取轮播图数据
    getLunbotu() {
      this.$http.get("lunbotu").then(result => {
        this.goodsPhoto = result.body;
      });
    },
    // 点击加入购物车, 显示小球动画, 并调用 mutations 的方法, 报数据保存到 vuex 中
    addShopCar() {
      // 数据要求, count id price selected
      this.flag = true;
      var productInfo = {
        id: this.id,
        count: this.productNum,
        price: this.goodsInfo.pirce_now,
        selected: true
      };
      this.$store.commit('getShopCarData', productInfo)
    },
    // 钩子函数动画
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 获取小球的横纵坐标
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const numPosition = document
        .getElementById("num-ponsition")
        .getBoundingClientRect();

      const xDist = numPosition.left - ballPosition.left;
      const yDist = numPosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.46,-0.19,.83,.67)";

      done();
    },
    afterEnter(el) {
      this.flag = false;
    },
    // 获取子组件 增加数量的 方法
    getProductNum(Num) {
      this.productNum = Num;
    }
  },
  components: {
    swipe,
    numBox
  }
};
</script>

<style lang="scss" scoped>
.mui-card {
  .now {
    color: red;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin-bottom: 5px;
  }
}

.ball {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  left: 146px;
  top: 360px;
  background: red;
}
</style>

