<template>
  <div>
    <h3>{{$t("app-title")}}</h3>
    <h4>{{counter}}</h4>
    <b-button variant='primary' @click="INCREMENT_COUNTER">+++</b-button>
    <b-button variant='primary' @click="DECREMENT_COUNTER">---</b-button>
    <div>
      <b-button variant='primary' @click="changeLang">{{$t("changeLang")}}</b-button>
    </div>


  </div>
</template>

<script>
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'counter',
  computed: {
    ...mapGetters('counter', {
      counter: GET_COUNTER
    })
  },
  methods: {
    ...mapActions('counter', [
      INCREMENT_COUNTER,
      DECREMENT_COUNTER
    ]),
    changeLang: function(){
      const lang = this.$i18n.locale();
      if(lang == "en"){
        this.$i18n.set("ja");
      }else{
        this.$i18n.set("en");
      }

    },
  }

}
</script>

<style scoped>

</style>
