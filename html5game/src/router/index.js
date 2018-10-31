import Vue from 'vue'
import Router from 'vue-router'
import Counter from '../components/Counter'
import GameItemBoard from '../components/GameItemBoard'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: GameItemBoard },
    { path: '/game', component: GameItemBoard },
    { path: '/counter', component: Counter }
  ]
})
