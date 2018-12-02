const state = {
  accountId: ''
}

const mutations = {
  setAccount (state, accountId) {
    state.accountId = accountId;
  }
}

/*
const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('SET_ACCOUNT')
  }
}
*/

export default {
  state,
  mutations
}
