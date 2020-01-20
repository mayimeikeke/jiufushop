<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
  <footer class="footer" @click.stop="gotoRouter">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <i slot="icon" class="icon-index"></i>
        <i class="title">首页</i>
      </mt-tab-item>
      <mt-tab-item id="分类页">
        <i slot="icon" class="icon-category"></i>
        <i class="title">分类</i>
      </mt-tab-item>
      <mt-tab-item id="购物车页">
        <i slot="icon" class="icon-car"></i>
        <i class="title">购物车</i>
      </mt-tab-item>
      <mt-tab-item id="用户页">
        <i slot="icon" class="icon-user"></i>
        <i class="title">我的</i>
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
export default {
  methods: {
    gotoRouter() {
      this.$router.push({
        name: this.selected
      });
    }
  },
  data() {
    return {
      //对应mt-tab-item 的id值
      selected: ""
    };
  },
  mounted() {
    //获取当前路由名称，根据该名称给当前footer添加is-selected
    let Rname = this.$route.name;
    switch (Rname) {
      case "首页":
        this.selected = "首页";
        break;
      case "分类页":
        this.selected = "分类页";
        break;
      case "购物车页":
        this.selected = "购物车页";
        break;
      case "用户页":
        this.selected = "用户页";
        break;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/fz.less";
@import "../assets/index/style.css";

.mint-tab-item-label:hover {
  color: #333;
}
.footer {
  .mint-tabbar {
    // height: 10vw;
    background-color: #fff;
    background-image: none;
    box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, 0.13);
    -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, 0.13);

    .is-selected {
      color: @cl;
      background-color: #fff;
      i {
        &::before {
          color: @cl;
          .fz(font-size, 40);
        }
      }
    }
  }
}
</style>
