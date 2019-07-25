<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="getNewNum"
      ref="numBox"
    >
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
  // 给父组件传数据
  methods: {
    getNewNum() {
      const num = this.$refs.numBox.value;
      this.$emit("getProductNum", parseInt(num));
    }
  },
  props: ["max"]
  // watch: {
  //   max: function(newValue, oldValue) {
  //     console.log(newValue + "--" + oldValue);
  //   }
  // }
};
</script>

<style lang="scss" scoped>
</style>

