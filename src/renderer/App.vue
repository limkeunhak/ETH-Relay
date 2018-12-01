<template>
  <div id="app">
    <v-app light>
      <v-toolbar fixed app>
        <v-toolbar-title class="subheading" v-text="title" to="/"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          to="/test"
        >
          <v-icon>router</v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>help</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer :fixed="fixed" app>
        <v-spacer></v-spacer>
        <span>&copy; 2018 EOSYS. All Right Reserved</span>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'ETH-Relay',
    data: () => ({
      fixed: false,
      title: 'ETH Relay'
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
