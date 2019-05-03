/**
 * Created by lei.sun on 2017/9/11.
 */
import * as types from './types';
import actions from './actions';
import { extend } from 'lodash';

const state = {
  user: null
};

// getters
const getters = {
  getUserInfo: (state) => state.user
};

// mutations
const mutations = {
  [types.LOAD_USER_INFO](state, data) {
    state.user = data;
  },
  [types.UPDATE_USER_INFO](state, data) {
    state.user = extend({}, state.user, data);
  },
  [types.CLEAR_USER_INFO](state) {
    state.user = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}