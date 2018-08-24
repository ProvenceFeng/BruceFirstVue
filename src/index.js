import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './router'
import vueStore from './store'
import Main from './components/index.vue'
import './themes/index.less';
const app = document.createElement('div')
document.body.appendChild(app);
Vue.use(Vuex);
Vue.use(VueRouter);
let store = new Vuex.Store(vueStore);
var demo = new Vue({
  router,
  store,
  render: h=>h(Main),
  created:function(){
    // this.$router.go('/login')
    // debugger
  }
});
demo.$mount(app);
