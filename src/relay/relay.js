module.exports = () => {
    return {
        getLastBlockNumber: () => {
            // eos 컨트랙트 호출 결과 반환
            return 0;
        },
        getBlockByHash: (hash) => {
            // 해시 값을 이용해 블록 정보 조회
        },
        setBlockToEOS: (block) => {
            // eos 컨트랙트를 통해 블록 정보 저장
        },
        getTxByHash: (hash) => {
            // 해시 값을 이용해 트랜잭션 정보 조회 (from geth)
        },
        setTxToEOS: (tx) => {
            // eos 컨트랙트를 통해 트랜잭션 정보 저장
        }

    };
}