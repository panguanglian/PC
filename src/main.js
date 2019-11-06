// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/iconfont.css'
axios.interceptors.request.use(
    config => {
      let token = localStorage.getItem("Access_token");
      if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers['Access-token'] = `${token}`;
      }
    
      return config;
    },
    err => {
      return Promise.reject(err);
    });

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.axios = axios;
// depot();

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.getItem("Access_token")) {  
            next();
        }else {
            next({
                name: 'login',
            })
        }
    }else {
        next();
    }

})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})