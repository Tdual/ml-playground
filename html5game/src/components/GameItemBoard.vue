<template>
  <div>
    <pick-up-items :items="items"></pick-up-items>
    <b-card-group deck>
      <game-item v-for="item in items" :key="item.id" :item="item"></game-item>
    </b-card-group>
  </div>
</template>

<script>
import { GET_GAME_ITEMS } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'item-board',
  created () {
    this.GET_GAME_ITEMS();
  },
  computed: {
    ...mapGetters('item-board', {
      items: GET_GAME_ITEMS
    })
  },
  methods: {
    ...mapActions('item-board', [
      GET_GAME_ITEMS,
    ])
  }
}
</script>

<style scoped>

</style>
