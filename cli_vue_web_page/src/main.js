import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

document.addEventListener('DOMContentLoaded', function () {
  // document.querySelector('.posters__title').classList.add('tracking-in-expand');
  // document.querySelector('.posters__button').classList.add('vibrate-1');
});