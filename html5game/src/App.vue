<template>
  <div id="app">
    <menubar></menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import { GET_GAME_ITEMS } from './store/mutation-type'
import { mapActions } from 'vuex'

export default {
  created () {
    this.GET_GAME_ITEMS();
  },
  methods: {
    ...mapActions('item-board', [
      GET_GAME_ITEMS,
    ])
  }
}
</script>

<style>
  #app {
    text-align: center;
  }
</style>
