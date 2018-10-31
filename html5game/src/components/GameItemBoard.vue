<template>
  <div>
    <pick-up-items :items="items"></pick-up-items>
    <b-card-group deck>
      <game-item v-for="item in items" :key="item.id" :item="item"></game-item>
    </b-card-group>
     <router-link to="/counter">Go to page2</router-link>
  </div>
</template>

<script>
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_GAME_ITEMS } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'item-board',
  computed: {
    ...mapGetters('item-board', {
      items: GET_GAME_ITEMS
    })
  },
  methods: {
    ...mapActions('item-board', [
      INCREMENT_COUNTER,
      DECREMENT_COUNTER
    ])
  }
}
</script>

<style scoped>

</style>
