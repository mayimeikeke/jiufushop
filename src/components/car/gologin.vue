<template lang="html">
  <router-link
    :to="{ name: '登录页', params: {} }"
    class="gologin"
    v-show="toggle"
  >
    <span>登录后享受更多优惠</span>
    <span>去登陆</span>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      toggle: !this.$store.state.login.token
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
.gologin {
  margin-top: 12vw;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4vw 6vw;
  color: #333;
  .bd();
  span {
    letter-spacing: 0.2vw;
    .fz(font-size, 5vw);
  }
  span:last-of-type {
    color: rgba(0, 0, 0, 0.54);
    position: relative;
    .fz(font-size, 5vw);
    padding-right: 2vw;
    &::after {
      content: "";
      position: absolute;
      right: -0.8vw;
      top: 46%;
      width: 1.8vw;
      height: 1.8vw;
      border-left: 1px solid currentColor;
      border-top: 1px solid currentColor;
      transform: translate3d(0, -50%, 0) rotateZ(135deg);
      -webkit-transform: translate3d(0, -50%, 0) rotateZ(135deg);
    }
  }
}
</style>
