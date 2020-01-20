import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http请求
import less from 'less'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false
// vue原型扩展变量
Vue.prototype.$api = api;

// 逻辑 : 如果进入我的页面, 判断token值是否存在, 不存在- 重定向到login, 存在-直接进入
// 如果进入其他页面, 直接进入
// 用钩子函数beforeEach()对路由进行判断
router.beforeEach((to, from, next) => {
  // console.log(to)
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
      if (store.state.login.token) {  //判断当前token是否存在
        next();
      }
      else {    //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else { //不需要权限 直接跳转
      next();
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
