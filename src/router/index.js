import VueRouter from 'vue-router';
import MainFrame from '../components/MainFrame/index.vue';
import Login from '../components/login/Login.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/main', component: MainFrame }
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});
export default router;
