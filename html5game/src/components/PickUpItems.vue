<template>
  <div class="pick-up-items">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="512"
                img-height="240"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="item in items" :key="item.id" :img-src="item.imgURL" img-width="512" img-height="240">
        <h1>{{item.title}}</h1>
        <b-button href="#" variant="primary"><router-link :to="'/games/'+item.id" style="color:white;">PLAY!</router-link></b-button>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      //this.sliding = true
    },
    onSlideEnd (slide) {
      //this.sliding = false
    }
  }
}
</script>

<style scoped>
.pick-up-items{
  margin: 20px;
  width: 80%;
  height: 80%;
}

</style>
