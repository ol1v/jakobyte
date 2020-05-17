import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formbuttonclicked: false
  },
  mutations: {
  },
  actions: {
    formbutton() {
      self.formbuttonclicked = true
    }
  },
  modules: {
  }
})
