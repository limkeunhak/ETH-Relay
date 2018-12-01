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
import relay from '../../relay/relay';

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
        relay.getLastBlockNumber()
        .then((result) => {
             that.blockInfo = result.data;
        }).catch((ex) => {
            that.blockInfo = ex;
        });
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
