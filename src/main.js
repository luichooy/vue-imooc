// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import App from './App.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const routes = [
  {path: '/goods', name: 'goods', component: goods},
  {path: '/ratings', name: 'ratings', component: ratings},
  {path: '/seller', name: 'seller', component: seller}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
});

const app = new Vue({
  router,
  components: {
    App
  }
});

app.$mount('#app');

// router.push('/goods');
