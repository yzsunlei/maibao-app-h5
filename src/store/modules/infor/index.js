import * as types from './types'
import actions from './actions'
import { extend } from 'lodash'

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// state
const state = {
  inforIndexData: {
    list: [],
    total: undefined
  },
  inforChatData: {
    list: [],
    total: undefined
  },
  inforDetail: {}
};

// getters
const getters = {
  getInforIndexData: (state) => state.inforIndexData,
  getInforChatData: (state) => state.inforChatData,
  getInforDetail: (state) => state.inforDetail
};

// mutations
const mutations = {
  [types.LOAD_INFOR_INDEX_DATA](state, data) {
    state.inforIndexData.list = state.inforIndexData.list.concat(data.list);
    state.inforIndexData.total = data.total;
  },
  [types.CLEAR_INFOR_INDEX_DATA](state) {
    state.inforIndexData.list = [];
    state.inforIndexData.total = undefined;
  },

  [types.LOAD_INFOR_CHAT_DATA](state, data) {
    state.inforChatData.list = state.inforChatData.list.concat(data.list);
    state.inforChatData.total = data.total;
  },
  [types.CLEAR_INFOR_CHAT_DATA](state) {
    state.inforChatData.list = [];
    state.inforChatData.total = undefined;
  },

  [types.LOAD_INFOR_DETAIL](state, data) {

  },
  [types.POST_INFOR_SEND](state, data) {

  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
