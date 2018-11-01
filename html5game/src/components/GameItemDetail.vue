<template>
  <div class="game-item-detail">
    <h1>{{item(id).title}}</h1>
    {{item? item(id):'aaa'}}
    <div class="game-frame">
    <iframe
      :src="item(id).bodyURL"
      marginwidth="0"
      marginheight="0"
      width="500px"
      height="500px"
      frameborder="0"
      scrolling="no"
      :data-iframe-src="item(id).bodyURL"
      >
    </iframe>
    </div>
  </div>
</template>

<script>
import { GET_GAME_ITEM_DETAIL } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'game-item-detail',
  props: ["id"],
  created () {},
  computed: {
    ...mapGetters('item-detail', {
      item: GET_GAME_ITEM_DETAIL
    })
  },
  methods: {}
}
</script>

<style scoped>
.game-frame{
    position:relative;
    width:50%;
    height:60%;
}
.game-frame iframe{
    position:absolute;
    width:100%;
    height:100;
}
</style>
