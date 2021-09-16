import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 0,
  },
  mutations: {
    nextPage (state) {
      state.currentPage++
    }
  },
  actions: {
  },
  modules: {
  }
})
