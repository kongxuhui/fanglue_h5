// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './services/http'
import { JSBridge, connectWebViewJSBridge } from '@/utils/sdk'

Vue.config.productionTip = false
Vue.prototype.$http = http;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // inject:['reload'],
  beforeCreate() {
    window.native = {};
    connectWebViewJSBridge(bridge => {
      window.JSDK = new JSBridge(bridge);
      window.native.goBack = () => {
        this.$router.go(-1);
      }
      window.native.loginUserInfo = (data) => {
       if(data!=null&&data.code === '000000')
        {
          store.commit('login', data.user);
          window.JSDK.responseUSER(data.user,{})
          router.replace(router.currentRoute.query.redirect || 'userCenter')
        }
     }
      window.native.updateLoginUserInfo = (data) => {
        //alert("data.userImg:"+data.);
          this.$store.state.user.userInfo=data;
          store.commit('login', data);
          router.go(0);
      }
      window.native.reSetUploadFile = (data) => {
        //alert("data.userImg:"+data.);
          router.go(0);
      }
      window.JSDK.getVersion(data=> {
        Vue.prototype.appInfo = data;
      })
  
    })
  }
})
