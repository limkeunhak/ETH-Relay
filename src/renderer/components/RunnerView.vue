<template>
  <v-layout row wrap class="centered">
    <label>{{ processingMsg }}</label>
    <v-btn color="info" small @click="runRelay" :disabled="disabled">Run relay</v-btn>
    <a v-if="disabled" href="#/settings">Go to settings</a>  
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        processingMsg: '',
        blockInfo: '',
        disabled: false
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
