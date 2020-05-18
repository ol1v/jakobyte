import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formActive: false
  },
  mutations: {
    formbutton(formActive) {
      formActive = true
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
