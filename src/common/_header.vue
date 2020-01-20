<template>
  <header>
    <router-link
     class="icon-go"
     :to="{ name: '首页'}"
     v-if="$route.matched[0].path=='/category'">
    </router-link>
    <span class="icon-go" @click="$router.go(-1)" v-else></span>
    <slot name="title"></slot>
  </header>
</template>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
header {
  background-color: #ee4423;
  text-align: center;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 13vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 0 4vw 0 2vw;
  z-index: 2;
  h1 {
    .fz(font-size,10vw);
    letter-spacing: .2vw;
    font-weight: 500;
    margin-right: 36vw;
    color: #fff;
  }
  span,a {
    display: inline-block;
    .fz(font-size,10vw);
    transform: rotate(-180deg);
    &::before {
      color:#fff;
    }
  }
}


</style>


<script>
export default {

}
</script>
