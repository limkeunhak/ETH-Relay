<template>
  <v-layout row wrap class="centered">
    <v-flex xs12 centered v-if="!isRunning">
      <label>{{ processingMsg }}</label>
    </v-flex>
    <v-flex xs12 centered v-if="!isRunning">
      <v-btn small outline @click="runRelay" v-if="!disabled">Run relay</v-btn>
      <a href="#/settings" v-else>Go to settings</a>
    </v-flex>
    <v-flex xs12 v-if="isRunning">
      relay info.
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        processingMsg: '',
        blockInfo: '',
        disabled: false,
        isRunning: false
      }
    },
    mounted () {
      if (this.$store.state.AccountStore.accountId === '') {
        this.processingMsg = 'You must set your eos account to relay';
        this.disabled = true;
      }
    },
    methods: {
      runRelay () {
        this.isRunning = true;
        /*
        const that = this;
        const spawn = require('child_process').spawn;
        let fetchd = spawn('node', ['../../relay/relayd.js'])
  
        fetchd.stdout.on('data', function (data) {
          that.blockInfo = data;
        });
        */
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
</style>
