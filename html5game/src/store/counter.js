import {INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER} from './mutation-type'

const counter = {
  namespaced: true,
  state: {
    counter_value: 0
  },

  actions: {
    [INCREMENT_COUNTER] ({commit, state, rootState}) {
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
    [GET_COUNTER] (state, getters, rootState) {
      return state.counter_value
    }
  }
}

export default counter
