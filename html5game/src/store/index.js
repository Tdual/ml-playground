import Vue from 'vue'
import Vuex from 'vuex'

import counter from './counter'
import itemBoard from './item-board'
import itemDetail from './item-detail'

import vuexI18n from 'vuex-i18n';

Vue.use(Vuex)


const store = new Vuex.Store({
  modules :{
    'counter': counter,
    'item-board': itemBoard,
    'item-detail': itemDetail,
  }
})

const config = {
	moduleName: 'trans',
	translateFilterName: 't'
}

Vue.use(vuexI18n.plugin, store, config);

const translationsEn = {
  "app-title": "Counter App",
  "changeLang": "Change Language"
};

const translationsJa = {
  "app-title": "カウンターアプリ",
  "changeLang": "言語を変える"
};

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('ja', translationsJa);

Vue.i18n.set('en');


export default store
