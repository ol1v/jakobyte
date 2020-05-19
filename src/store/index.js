import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formActive: false
  },
  getters: {
    formActive: state => state.formActive
  },
  mutations: {
    formbutton(state) {
      state.formActive = true
    }
  },
  actions: {
    formbutton(context) {
      context.commit('formbutton')
    }
  },
  modules: {
  }
})
