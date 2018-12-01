<template>
  <v-layout row wrap justify-center id="wrapper">
    <v-flex xs12>
      <system-information></system-information>
    </v-flex>
  </v-layout>
</template>

<script>
  import SystemInformation from './Sysinfo/SystemInformation'

  export default {
    name: 'settings',
    components: { SystemInformation },
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
