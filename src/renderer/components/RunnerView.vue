<template>
  <v-layout column justify-center>
    <v-flex>
      <v-btn color="info" small @click="getBlockNumber">블록번호 가져오기</v-btn>
      <blockquote class="text-xs-center">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
            <v-btn color="info">검색</v-btn>
            <em>&mdash;{{ blockInfo }}</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    data () {
      return {
        blockInfo: ''
      }
    },
    methods: {
      getBlockNumber () {
        let that = this;
        this.blockInfo = '검색중..';
        axios.post('/', {
          'jsonrpc': '2.0',
          'method': 'eth_blockNumber',
          'params': [],
          'id': 10
        }, {
          headers: {
              'Content-Type': 'application/json'
          }
        }).then((result) => {
            console.log(result);
            that.blockInfo = result.data;
          }).catch((ex) => {
            that.blockInfo = ex;
          })
      }

    }
}
</script>
<style scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
</style>