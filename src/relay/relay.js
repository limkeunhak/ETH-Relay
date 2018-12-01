const axios = require('axios');
const utils = require('./utils');
const config = require('../config/app.config');

module.exports = () => {
    return {
        isRunning: false,
        getBlockNumber: function () {
            const url = utils.createApiPath('eth_blockNumber');
            return axios.post(url);
        },
        getLastBlockNumber: function () {
            // TODO: eos에서 저장한 마지막 블록 번호를 반환
        },
        getBlockByNumber: function (number) {
            let param = utils.toHexNumber(number);
            if(isNaN(param)){
                return;
            }

            const url = utils.createApiPath('eth_getBlockByNumber', { tag: param, boolean: true });
            return axios.post(url);
        },
        getBlockTransactionCountByNumber: function (number) {
            let param = utils.toHexNumber(number);
            if(isNaN(param)){
                return;
            }

            const url = utils.createApiPath('eth_getBlockTransactionCountByNumber', { tag: param });
            return axios.post(url);
        },
        getTransactionByHash: function (hash) {
            const url = utils.createApiPath('eth_getTransactionByHash', { txhash: hash, boolean: true });
            return axios.post(url);
        },
        getBlockByHash: function (hash) {
            // TODO: 현재 etherscan에서 api 미제공
        },
        setBlockToEOS: function (block) {
            // TODO: eos 컨트랙트를 통해 블록 정보 저장
        },
        getTxByHash: function (hash) {
            // TODO: 해시 값을 이용해 트랜잭션 정보 조회 (from geth)
        },
        setTxToEOS: function (tx) {
            // TODO: eos 컨트랙트를 통해 트랜잭션 정보 저장
        },
        fetchAndSet: function () {
            // TODO: ethereum에서 정보를 받아 eos에 저장
        },
        setIsRunning: function (isRunning) {
            this.isRunning = isRunning;
        },
        sleep: function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },        
        runRelay: async function () {
            this.isRunning = true;
            const that = this;
            // config check
            if(!config) return;
            
            while (true) {
                // check flag
                if (!that.isRunning) break;

                this.fetchAndSet();
                await this.sleep(config.timeInterval);
            }
        }
    }
}