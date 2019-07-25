<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item._id">
      <img :src="item.url" :class="{'full': isfull}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  overflow: hidden;
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .full {
    width: 100%;
  }
}
</style>

