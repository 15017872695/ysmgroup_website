import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'reset-css';
import 'lib-flexible';
import vueSwiper from '../node_modules/vue-awesome-swiper/dist/vue-awesome-swiper'
import '../node_modules/swiper/swiper.scss'
Vue.use(vueSwiper)
import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.use(animated)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
