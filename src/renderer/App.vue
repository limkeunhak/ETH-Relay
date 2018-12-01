<template>
  <div id="app">
    <v-app light>
      <v-toolbar fixed app>
        <v-toolbar-title class="subheading" v-text="title" to="/"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          to="/"
        >
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn
          icon
          to="/runner"
        >
          <v-icon>router</v-icon>
        </v-btn>
        <v-btn
          icon
          to="/settings"
        >
          <v-icon>settings</v-icon>
        </v-btn>
        <v-btn
          icon
          to="/sysinfo"
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
        <span class="caption">&copy; 2018 Team KEOS. All Right Reserved</span>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'eth-relay',
    data: () => ({
      fixed: false,
      title: 'ETH Relay'
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
  ::-webkit-scrollbar { display: none; } 
</style>
