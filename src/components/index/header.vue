<template lang="html">
  <mt-header title="久富商城">
    <router-link :to="{ name: '' }" slot="right">
      <mt-button icon="search"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.mint-header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 6.8vw 4.8vw;
  width: 100%;
  height: 12vw;
  z-index: 1;
  background-color: @cl;
  color: #fff !important;
  .fz(font-size, 10vw) !important;
  border-bottom: 1px solid #eee;
  .mint-button {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    .mintui mintui-search {
      width: 10vw;
      height: 10vw;
      display: inline-block;
    }
  }
}
</style>
