<template>
  <v-layout row wrap id="wrapper">
    <v-flex xs12>
      <v-card>
        <v-card-title class="subheading">
          System Version
        </v-card-title>
        <v-divider></v-divider>
        <v-layout row wrap class="pa-3">
          <v-flex xs6 sm6 md4>
            <div class="name body-1">Vue.js:</div>
            <div class="value body-1">{{ vue }}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
            <div class="name body-1">Electron:</div>
            <div class="value body-1">{{ electron }}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
            <div class="name body-1">Node:</div>
            <div class="value body-1">{{ node }}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
            <div class="name body-1">Platform:</div>
            <div class="value body-1">{{ platform }}</div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card class="mt-2">
        <v-card-title class="subheading">
          Help
        </v-card-title>
        <v-divider></v-divider>
        <v-layout row wrap class="pa-3">
          <v-flex xs6 sm6 md4>
            <ul>
              <li><a href="#">Welcome</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Documentations</a></li>
              <li><a href="#">Release Notes</a></li>
            </ul>
          </v-flex>
        </v-layout>
      </v-card>  
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'info',
    data () {
      return {
        electron: process.versions['atom-shell'],
        node: process.versions.node,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped>
  .name
  {
    display: inline;
    font-weight: 200;
    font-size: 9px;
    letter-spacing: 1px;
  }

  .value
  {
    display: inline;
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    padding-left: 5px;
  }
</style>
