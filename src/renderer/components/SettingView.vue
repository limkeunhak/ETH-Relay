<template>
  <v-layout row wrap justify-center id="wrapper">
    <v-flex xs12>
      <v-card>
        <v-card-title class="body-2">
          Set your EOS account
        </v-card-title>
        <v-divider></v-divider>
        <v-layout row wrap class="pa-3">
          <v-flex xs12 sm6 md4 class="body-1">
            <div class="caption"><b>Current Account ID</b></div>
            <div class="caption mt-2 mb-1 centered">{{ msg }}</div>
          </v-flex>
          <v-flex xs12 sm6 md4 class="body-1 mt-2">
            <div class="caption"><b>Modify Account ID</b></div>
          </v-flex>          
          <v-flex xs9>
            <v-text-field class="caption" v-model="accountId"></v-text-field>
          </v-flex>          
          <v-flex xs3>
            <v-btn small color="info" @click="modifyAccount">Modify</v-btn>
          </v-flex>
        </v-layout>
      </v-card>  
      <v-card class="mt-2">
        <v-layout class="align-center">
          <v-flex>
            <v-card-title class="body-2">
              Tray Mode
            </v-card-title>
          </v-flex>
          <v-flex>
            <v-switch 
              v-model="traymode"
              @change="changeTraymode"
            ></v-switch>
          </v-flex>
        </v-layout>     
      </v-card>  
    </v-flex>
  </v-layout>
</template>

<script>
  // const msg = 'You should need to set your eos account';
  const noAccountMsg = 'No Account has been set'
  export default {
    name: 'settings',
    data () {
      return {
        accountId: '',
        msg: '',
        traymode: false
      }
    },
    mounted () {
      if (this.$store.state.AccountStore.accountId === '') {
        this.msg = noAccountMsg;
      } else {
        this.msg = this.$store.state.AccountStore.accountId;
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      modifyAccount () {
        if (this.accountId === '') {
          alert('Input your account id')
          return;
        }
        // TODO: need account validation
        alert('Your account setup is successfully completed')

        this.$store.commit('setAccount', this.accountId);
        this.msg = this.accountId;
      },
      changeTraymode () {
        // TODO:
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
