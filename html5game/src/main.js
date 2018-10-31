import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index.js';
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Menubar from './components/Menubar'

import GameItemBoard from './components/GameItemBoard'
import GameItem from './components/GameItem'
import PickUpItems from './components/PickUpItems'


Vue.use(BootstrapVue);

Vue.component('menubar', Menubar)
Vue.component('game-item', GameItem)
Vue.component('game-item-board', GameItemBoard)
Vue.component('pick-up-items', PickUpItems)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
