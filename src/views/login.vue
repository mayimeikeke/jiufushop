<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登录页</h1>
    </v-header>
    <section>
      <mt-field
        label="账号"
        placeholder="请输入账号"
        type="text"
        v-model="account"
        :readonly="!toggle"
        :disableClear="!toggle"
      ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        :readonly="!toggle"
        :disableClear="!toggle"
      ></mt-field>
      <p class="tip">Tip : 开发 账号密码随便输</p>
    </section>
    <mt-button plain size="large" @click="login">登录</mt-button>
  </div>
</template>

<script>
import Header from "@/common/_header.vue";
import { Toast } from "mint-ui";
export default {
  components: {
    "v-header": Header
  },
  data() {
    return {
      account: "",
      password: "",
      toggle: !this.$store.state.login.token
    };
  },
  methods: {
    // 登录按钮
    login() {
      if (this.account !== "" && this.password !== "") {
        Toast("登录成功,跳转到首页");
        this.toggle = false;
        this.$store.commit("CHANGE_TOKEN", 1);
      } else {
        Toast("账号密码不能为空");
      }
      setTimeout(() => {
        this.$router.replace({
          path: "user"
        });
      }, 1000);
    },
  }
};
</script>

<style lang="less" scoped>
.login {
  overflow: hidden;
  > section {
    margin-top: 13vw;
    .tip {
      padding: 6vw 3vw;
      color: rgb(224, 145, 71);
      letter-spacing: 2px;
    }
  }
}
</style>
