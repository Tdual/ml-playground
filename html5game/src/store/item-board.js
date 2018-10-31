import {INCREMENT_COUNTER, DECREMENT_COUNTER, GET_GAME_ITEMS} from './mutation-type'
import Vue from 'vue';
import axios from 'axios';

const itemBoard = {
  namespaced: true,
  state: {
    items: [
      {id:1, title:'HAPPY GLASS', description: 'Description', imgURL: 'https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/unnamed.png'},
      {id:2, title:'グラディウス', description: 'Description', imgURL: 'https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/Gradius.jpg'},
      {id:3,title:'slither.io', description: 'Description', imgURL: 'https://picsum.photos/600/300/?image=25'},
      {id:4,title:'Title', description: 'Description', imgURL: 'https://picsum.photos/600/300/?image=25'},
      {id:5,title:'Title', description: 'Description', imgURL: 'https://picsum.photos/600/300/?image=25'},
      {id:6,title:'Title', description: 'Description', imgURL: 'https://picsum.photos/600/300/?image=25'},
      {id:7,title:'Title', description: 'Description', imgURL: 'https://picsum.photos/600/300/?image=25'},
    ]
  },

  actions: {
    [INCREMENT_COUNTER] ({commit, state, rootState}) {
      axios.get("test").then((response) => {
        console.log("###########");
        console.log(response.data);
      },(response) => {
      });
      commit(INCREMENT_COUNTER, {})
    },
    [DECREMENT_COUNTER] ({commit, state, rootState}) {
      commit(DECREMENT_COUNTER, {})
    }
  },

  mutations:{
    [INCREMENT_COUNTER] (state, payload) {
      state.counter_value += 1
    },
    [DECREMENT_COUNTER] (state, payload) {
      state.counter_value -= 1
    }
  },

  getters:{
    [GET_GAME_ITEMS] (state, getters, rootState) {
      return state.items
    }
  }
}

export default itemBoard
