<template>
  <div class="game-item">
    <b-card :title="item.title"
        :img-src="item.imgURL"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 15rem;">
      <p class="card-text">{{item.description}}</p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'game-item',
  props: ['item'],
  computed: {},
  methods: {}
}
</script>

<style scoped>
.game-item{
  margin-top: 10px;
  margin-left: 10px;
}

</style>
