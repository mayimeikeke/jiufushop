<template lang="html">
  <footer class="footer">
    <!-- 联系客服 -->
    <router-link :to="{ name: '' }" class="footer-service">
      <img src="../../assets/detail/images/service.svg"/>
    </router-link>
    <!-- 回到首页 -->
    <router-link :to="{ name: '首页' }" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <!-- 购物车 -->
    <router-link :to="{ name: '购物车页' }" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{ count }}</span>
    </router-link>
    <span class="footer-addcar" @click="addIntoCar">
      加入购物车
    </span>
  </footer>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      product: []
    };
  },
  computed: {
    count() {
      //页面刷新后 数据会消失,解决:加判断
      if (this.$store.state.detail.count == "") {
        this.$store.commit("CHANGE_COUNT");
      }
      return this.$store.state.detail.count;
    },
    productDatasView() {
      return this.$store.state.detail.productDatas.view;
    },
    colSelected() {
      return this.$store.state.detail.colSelected;
    },
    sizeSelected() {
      return this.$store.state.detail.sizeSelected;
    }
  },
  mounted() {
    // 初始化先获取购物车商品列表 否则 页面刷新出Bug
    if (this.$store.state.detail.carList == "") {
      this.$store.commit("RESET_CARLIST");
    }
  },
  methods: {
    // 添加到购物车
    addIntoCar() {
      const product = [
        {
          title: this.productDatasView.title,
          price: this.productDatasView.price,
          size: this.productDatasView.chose[this.sizeSelected].size,
          col: this.productDatasView.chose[this.colSelected].col,
          id: this.productDatasView.id,
          imgPath: this.$store.state.detail.productDatas.swiper[0].imgSrc,
          choseBool: false,
          count: this.productDatasView.count
        }
      ];
      this.product = product;
      //  mint-ui的弹出式提示框
      MessageBox.confirm(
        `商品名称:${product[0].title}</br>` +
          `价格:${product[0].price}</br>` +
          `规格:${product[0].size}</br>` +
          `颜色:${product[0].col}</br>` +
          `商品ID:${product[0].id}</br>`
      ).then(
        action => {
          //点击成功执行这里的函数
          // 使用id判断是否添加过购物车,添加过---count++, 未添加过---购物车项目+1
          // 逻辑: 获取购物车列表并遍历id
          let carList = this.$store.state.detail.carList || [];
          let index = carList.findIndex(item => {
            return item.id == this.product[0].id;
          });
          if (index == -1) {
            // 没有加入过购物车
            this.product[0].count = 1;
            this.$store.dispatch("setLocalCount", true);
            this.$store.dispatch("addCarList", this.product);
            Toast({
              message: "添加成功",
              duration: 1000
            });
          } else {
            // 加入过购物车
            this.product[0].count++;
            console.log(this.product[0].count);

            Toast({
              message: "已经添加过了~",
              duration: 1000
            });
          }
        },
        function(err) {}
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";

.footer {
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 14vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  -moz-user-select: none;
  -webkit-user-select: none;
  .bt();
  .footer-index,
  .footer-gocar,
  .footer-addcar {
    text-align: center;
  }
  .footer-index,.footer-service {
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    line-height: 14vw;
    height: 14vw;
    padding-top: 1.5vw;
    border-right-color: #f7f7f7;
    border-right-style: solid;
    .fz(border-right-width, 1);
    text-align: center;
    img{
      margin-top: -2vw;
      width: 8vw;
      height: 8vw;
      vertical-align: middle;
    }
    i {
      .fz(font-size, 10vw);
    }
    &:active {
      background-color: #f1f1f1;
    }
  }

  .footer-gocar {
    position: relative;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 14vw;
    line-height: 14vw;
    padding-top: 1.6vw;
    span {
      height: 5.5vw;
      width: 5.5vw;
      line-height: 5.5vw;
      position: absolute;
      top: 0.5vw;
      right: 5.5vw;
      background-color: @cl;
      border-radius: 50%;
      color: #fff;
      .fz(font-size, 10vw);
    }

    &:active {
      background-color: #f1f1f1;
    }
    i {
      .fz(font-size, 10vw);
    }
  }

  .footer-addcar {
    -webkit-flex: 6;
    -ms-flex: 6;
    flex: 6;
    line-height: 14vw;
    height: 14vw;
    .fz(font-size, 10vw);
    color: #fff;
    background-color: @cl;
    letter-spacing: 0.2vw;
    &:active {
      background-color: #ff7d00;
    }
  }
}
</style>
