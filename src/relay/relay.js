const axios = require('axios');
const utils = require('./utils');

module.exports = {
    getLastBlockNumber: () => {
        const url = utils.createApiPath('eth_blockNumber');
        return axios.post(url);
    },
    getBlockByNumber: (number) => {
        const url = utils.createApiPath('eth_getBlockByNumber', { tag: number, boolean: true });
        return axios.post(url);
    },
    getBlockTransactionCountByNumber: (number) => {
        const url = utils.createApiPath('eth_getBlockTransactionCountByNumber', { tag: number });
        return axios.post(url);
    },
    getTransactionByHash: (hash) => {
        const url = utils.createApiPath('eth_getTransactionByHash', { txhash: hash, boolean: true });
        return axios.post(url);
    },
    getBlockByHash: (hash) => {
        // TODO: 
        // 현재 etherscan에서 api 미제공
    },
    setBlockToEOS: (block) => {
        // eos 컨트랙트를 통해 블록 정보 저장
    },
    getTxByHash: (hash) => {
        // 해시 값을 이용해 트랜잭션 정보 조회 (from geth)
    },
    setTxToEOS: (tx) => {
        // eos 컨트랙트를 통해 트랜잭션 정보 저장
    },
    runRelay: () => {
        // config에 정의된 interval 에 따라서 주기적으로 정보를 저장 및 전송
    }
}
