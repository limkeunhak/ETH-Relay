<template>
  <v-card>
    <v-card-title class="subheading">
      System Informations
    </v-card-title>
    <v-divider></v-divider>
    <v-layout row wrap class="pa-3">
      <v-flex xs6 sm6 md4 class="item">
        <div class="name body-1">Vue.js:</div>
        <div class="value body-1">{{ vue }}</div>
      </v-flex>
      <v-flex xs6 sm6 md4 class="item">
        <div class="name body-1">Electron:</div>
        <div class="value body-1">{{ electron }}</div>
      </v-flex>
      <v-flex xs6 sm6 md4 class="item">
        <div class="name body-1">Node:</div>
        <div class="value body-1">{{ node }}</div>
      </v-flex>
      <v-flex xs6 sm6 md4 class="item">
        <div class="name body-1">Platform:</div>
        <div class="value body-1">{{ platform }}</div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    name: 'system-info',
    data () {
      return {
        electron: process.versions['atom-shell'],
        node: process.versions.node,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

<style scoped>
  .item
  {
    text-align: center;
  }

  .name
  {
    display: inline;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .value
  {
    display: inline;
    font-style: italic;
    font-weight: 600;
    font-size: 18px;
    padding-left: 5px;
  }
</style>
