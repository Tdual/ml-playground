import {GET_GAME_ITEMS, SET_GAME_ITEMS} from './mutation-type'
import Vue from 'vue';
import axios from 'axios';

const itemBoard = {
  namespaced: true,
  state: {
    items: [
      {
              "id": 1,
              "title": "HAPPY GLASS",
              "description": "Description",
              "bodyURL": "https://html5.gamedistribution.com/7a89fa5298ae4c248da2c0c006eca1fa/",
              "imgURL": "https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/unnamed.png"
      },
      {
              "id": 2,
              "title": "グラディウス",
              "description": "Description",
              "bodyURL": "http://appsweets.net/gradius/index.html",
              "imgURL": "https://s3-ap-northeast-1.amazonaws.com/ml-html5game/game_thumbnail/Gradius.png"
      }
    ]
  },

  actions: {
    [GET_GAME_ITEMS] ({commit, state, rootState}) {
      axios.get("items").then((response) => {
        console.log(response.data);
        const res = response.data;
        commit(SET_GAME_ITEMS, res)
      },(response) => {
        console.log("error");
        console.log(response);
      });
    }
  },

  mutations:{
    [SET_GAME_ITEMS] (state, payload) {
      state.items = payload.list;
    },
  },

  getters:{
    [GET_GAME_ITEMS] (state, getters, rootState) {
      return state.items
    }
  }
}

export default itemBoard
