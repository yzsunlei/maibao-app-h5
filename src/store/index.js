import Vue from 'vue'
import Vuex from 'vuex'

import plugins from './plugins/index'
import * as modules from "./modules"

Vue.use(Vuex);

export default new Vuex.Store({
  plugins,
  modules,
  strict: true,
})
