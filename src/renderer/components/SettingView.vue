<template>
  <v-layout row wrap justify-center id="wrapper">
    <v-flex xs12>
      <label>세팅 페이지</label>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'settings',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped>
  .centered
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo
  {
    max-width: 100%;
  }

  .link-btn
  {
    width: 150px;
  }
</style>
