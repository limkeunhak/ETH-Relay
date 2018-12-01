<template>
  <v-layout row wrap justify-center id="wrapper">
    <v-flex xs6 md4 offset-md1 class="text-xs-center centered">
      <img id="logo" class="logo" src="~@/assets/logo_eth-relay.png" alt="eth-relay">
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-text>
          <p class="subheading text-xs-center"><b>Welcome to the ETH Relay</b></p>
          <p class="text-xs-center">ETH Relay is a building block that allows EOS contracts to securely verify Ethereum transactions without any intermediaries: in short users can pay with Ethereum to use EOS DAPPs.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'front',
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
