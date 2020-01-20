<template lang="html">
  <div class="wrap">
    <v-gologin></v-gologin>
    <ul class="something" v-if="carList">
      <li v-for="(k, i) in carList">
        <div class="something-left" @click="toggle(i)">
          <label class="true" :class="{ false: !k.choseBool }">
            <input type="checkbox" v-model="k.choseBool" />
          </label>
        </div>
        <div class="something-middle">
          <img :src="k.imgPath" />
        </div>
        <div class="something-right">
          <router-link :to="{ name: '' }">
            <p>{{ k.title }}</p>
            <p style="color:rgb(199, 108, 28)">{{ k.col }} - {{ k.size }}</p>
            <p>单价：{{ k.price }}元</p>
            <p>
              <button @click.stop="sub(i)">-</button>
              <b> {{ k.count }}</b>
              <button @click.stop="add(i)">+</button>
            </p>
          </router-link>
          <div class="something-right-bottom" @click="cut(i)">
            <span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 提示登录组件
import { MessageBox, Toast } from "mint-ui";
import Gologin from "@/components/car/gologin.vue";
import Util from "../../util/common";
export default {
  components: {
    "v-gologin": Gologin
  },
  computed: {
    carList() {
      return this.$store.state.detail.carList;
    }
  },
  mounted() {
    // 初始化先获取购物车商品列表 否则 页面刷新出Bug
    if (this.$store.state.detail.carList == "") {
      this.$store.commit("RESET_CARLIST");
    }
  },

  methods: {
    cut(i) {
      // 点击垃圾桶，删除当前商品，只能重置数组
      MessageBox.confirm("确定要删除该商品?").then(
        action => {
          //点击成功执行这里的函数
          let newCarList = [];
          for (let k = 0; k < this.carList.length; k++) {
            if (k !== i) {
              newCarList.push(this.carList[k]);
            }
          }
          //点击垃圾桶 把商品数量count-1
          this.$store.dispatch("setLocalCount", false);
          this.$store.dispatch("cutCarList", newCarList);
        },
        function(err) {}
      );
    },
    toggle(i) {
      // 每点击一下都会改变choseBool的布尔值,所以要重置数组
      this.carList[i].choseBool = !this.carList[i].choseBool;
      this.$nextTick(() => {
        this.$store.dispatch("cutCarList", this.carList);
      });
    },
    // 添加商品数量
    add(i) {
      this.carList[i].count++;
      this.$nextTick(() => {
        this.$store.dispatch("cutCarList", this.carList);
      });
    },
    // 减少商品数量
    sub(i) {
      if (this.carList[i].count == 1) {
        Toast({
          message: "不能再少了~",
          duration: 1000
        });
      } else {
        this.carList[i].count--;
        this.$nextTick(() => {
          this.$store.dispatch("cutCarList", this.carList);
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
.wrap {
  width: 100%;
  overflow: auto;
  .something {
    width: 100%;
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 4vw 2vw;
      position: relative;
      height: 26vw;
      .bd();
      .something-left {
        -ms-flex: 2;
        -webkit-box-flex: 2;
        flex: 2;

        label {
          float: left;
          background: url("../../assets/car/images/tt.svg") no-repeat center
            center/50% 50%;
          input {
            height: 14vw;
            width: 14vw;
            opacity: 0;
            filter: alpha(opacity=0);
          }
        }
        .false {
          background: url("../../assets/car/images/f.svg") no-repeat center
            center / 50% 50% !important;
        }
      }
      .something-middle {
        -ms-flex: 3;
        -webkit-box-flex: 3;
        flex: 3;
        height: 26vw;
        padding-left: 2vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .something-right {
        -ms-flex: 7;
        -webkit-box-flex: 7;
        flex: 7;
        height: 100%;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-left: 6vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          .fz(font-size, 5vw);
          b{
          .fz(font-size, 5vw);
          }
          button{
          .fz(font-size, 5vw);
          }
        }
        p:last-of-type {
          .fz(font-size, 22);
          color: rgb(168, 168, 168);
        }
        b {
          display: inline-block;
          width: 5vw;
          text-align: center;
          height: 5vw;
          .fz(font-size, 28);
          color: #333;
        }
        button {
          margin: 2vw;
          width: 6vw;
          height: 6vw;
          border-radius: 50%;
          background: #eee;
          line-height: 6vw;
          text-align: center;
        }
        .something-right-bottom {
          > div {
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            input {
              width: 6vw;
              text-align: center;
            }

            span {
              height: 7vw;
              line-height: 7vw;
              width: 8vw;
              display: inline-block;
              border: 0.2vw solid #f1f1f1;
              border-radius: 1vw;
              text-align: center;
              font-size: 20px;
              cursor: pointer;
            }
          }
          > span {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 13vw;
            height: 13vw;
            background: url("../../assets/car/images/laji.svg") no-repeat
              center/50%;
          }
        }
      }
    }
  }
  label,
  span {
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
</style>
