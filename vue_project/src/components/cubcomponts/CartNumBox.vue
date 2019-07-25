<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="count" readonly ref="numBox" @change="getNowCount" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui";
export default {
  // 初始化组件
  mounted() {
    mui(".mui-numbox").numbox();
    mui(".mui-numbox")
      .numbox()
      .setOption("max", this.max);
  },
  methods: {
    getNowCount() {
      this.$store.commit('updataShopCartCount', {
        count: this.$refs.numBox.value,
        id: this.id
      })
    }
    
  },
  props: ['count', 'id']
 

};
</script>

<style lang="scss" scoped>
.mui-numbox {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 90px;
    height: 25px;
    padding: 0 30px;
    vertical-align: top;
    vertical-align: middle;
    border: solid 1px #bbb;
    border-radius: 3px;
    background-color: #efeff4;
  .mui-input-numbox {
    display: block;
    width: 30px;
  }
  .mui-btn-numbox-minus,
  .mui-btn-numbox-plus {
    width: 30px;
  }
}
</style>

