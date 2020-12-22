import Vue from 'vue'
import Vuex from 'vuex'
import cookie from '../utils/cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aside: [],
    username: cookie.getCookie('username')
  },
  mutations: {
    changeAside(state, d) {
      console.log(d)
      state.aside = d
    },
    setCookie(state,username) {
      cookie.setCookie("username", username);
      state.username = cookie.getCookie('username')
    }
  },
  actions: {
  },
  modules: {
  }
})
