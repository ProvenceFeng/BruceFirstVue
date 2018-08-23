import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router'
import Main from './components/index.vue'
import './themes/index.less';
const app = document.createElement('div')
document.body.appendChild(app);
Vue.use(VueRouter);
var demo = new Vue({
  router,
  render: h=>h(Main),
  created:function(){
    // this.$router.go('/login')
    // debugger
  }
});
demo.$mount(app);
