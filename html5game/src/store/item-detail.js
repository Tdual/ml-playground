import {GET_GAME_ITEM_DETAIL} from './mutation-type'
import Vue from 'vue';

const itemDetail = {
  namespaced: true,
  state: {
  },
  actions: {
  },
  mutations:{
  },

  getters:{
    [GET_GAME_ITEM_DETAIL]: (state, getters, rootState) => (id) => {
      console.log("##############");
      console.log(rootState["item-board"].items)
      console.log("##############");
      const items = rootState["item-board"].items
      let target = null;
      for(let i=0;i<items.length;i++){
        if(items[i].id == id){
          target = items[i];
          break;
        }
      }
      return target;
    }
  }
}

export default itemDetail
