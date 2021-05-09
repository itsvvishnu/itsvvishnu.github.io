import { createStore } from 'vuex'

export default createStore({
  state: {
    language:'en'
  },
  mutations: {
    changeLanguage(state,language){
      state.language = language
    }
  },
  actions: {
    SWITCH_LANGUAGE({commit},language){
      commit('changeLanguage',language)
    }
  },
  getters:{
    language: (state) => state.language
  },
  modules: {
  }
})
