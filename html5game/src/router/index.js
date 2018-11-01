import Vue from 'vue'
import Router from 'vue-router'
import Counter from '../components/Counter'
import GameItemBoard from '../components/GameItemBoard'
import GameItemDetail from '../components/GameItemDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: GameItemBoard },
    { path: '/games/:id', component: GameItemDetail, props: true},
    { path: '/counter', component: Counter }
  ]
})
