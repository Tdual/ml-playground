<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">無料ゲーム</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <!--
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

  -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">English</b-dropdown-item>
        <b-dropdown-item href="#">日本語</b-dropdown-item>
      </b-nav-item-dropdown>
      <!--

      <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
  -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
import { INCREMENT_COUNTER, DECREMENT_COUNTER, GET_COUNTER } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'menubar',
  computed: {
    ...mapGetters('counter', {
      counter: GET_COUNTER
    })
  },
  methods: {
    ...mapActions('counter', [
      INCREMENT_COUNTER,
      DECREMENT_COUNTER
    ])
  }
}
</script>

<style scoped>

</style>
