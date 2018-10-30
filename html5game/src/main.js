import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index.js';
import store from './store'

import Menubar from './components/Menubar'


Vue.use(BootstrapVue);

Vue.component('menubar', Menubar)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
