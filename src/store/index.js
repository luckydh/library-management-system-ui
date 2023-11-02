import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import states from './states'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export const store = new Vuex.Store({
    state: states,
    getters: getters,
    actions: actions,
    mutations: mutations,
    modules: []
});
