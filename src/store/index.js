import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './action'
import publicApi from './modules/publicApi/publicApi'

Vue.use(Vuex)

export default new Vuex.Store({
  	modules: {
    	publicApi
  	}
})