import Vue from 'vue'
import Vuex from 'vuex'

import home from './home.module'
import auth from './auth.module'
import article from './article.module'
import profile from './profile.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile
  }
})

window.__store__ = store

export default store
