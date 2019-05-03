import * as types from './types'
import actions from './actions'
import { extend } from 'lodash'

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import {
  Toast
} from "mint-ui";

// states
const state = {
  trendFriendData: {
    list: [],
    total: undefined
  },
  trendFollowData: {
    list: [],
    total: undefined
  },
  trendWorkData: {
    list: [],
    total: undefined
  },
  trendToutiaoData: {
    list: [],
    total: undefined
  },
  trendTopicData: {
    list: [],
    total: undefined
  },
  trendFriendDetail: {},
  trendFollowDetail: {},
  trendWorkDetail: {},
};

// getters
const getters = {
  getTrendFriendData: (state) => state.trendFriendData,
  getTrendFollowData: (state) => state.trendFollowData,
  getTrendWorkData: (state) => state.trendWorkData,
  getTrendToutiaoData: (state) => state.trendToutiaoData,
  getTrendTopicData: (state) => state.trendTopicData,
};

// mutations
const mutations = {
  [types.LOAD_TREND_FRIEND_DATA](state, data) {
    state.trendFriendData.list = state.trendFriendData.list.concat(data.list);
    state.trendFriendData.total = data.total;
    state.trendFriendData.loading = false;
  },
  [types.CLEAR_TREND_FRIEND_DATA](state) {
    state.trendFriendData.list = [];
    state.trendFriendData.loading = false;
    state.trendFollowData.total = undefined;
  },

  [types.LOAD_TREND_FOLLOW_DATA](state, data) {
    state.trendFollowData.list = state.trendFollowData.list.concat(data.list);
    state.trendFollowData.total = data.total;
    state.trendFollowData.loading = false;
  },
  [types.CLEAR_TREND_FOLLOW_DATA](state) {
    state.trendFollowData.list = [];
    state.trendFollowData.loading = false;
    state.trendFollowData.total = undefined;
  },

  [types.LOAD_TREND_WORK_DATA](state, data) {
    state.trendWorkData.list = state.trendWorkData.list.concat(data.list);
    state.trendWorkData.total = data.total;
    state.trendWorkData.loading = false;
  },
  [types.CLEAR_TREND_WORK_DATA](state) {
    state.trendWorkData.list = [];
    state.trendWorkData.loading = false;
    state.trendWorkData.total = undefined;
  },

  [types.LOAD_TREND_TOUTIAO_DATA](state, data) {
    state.trendToutiaoData.list = state.trendToutiaoData.list.concat(data.list);
    state.trendToutiaoData.total = data.total;
    state.trendToutiaoData.loading = false;
  },
  [types.CLEAR_TREND_TOUTIAO_DATA](state) {
    state.trendToutiaoData.list = [];
    state.trendToutiaoData.loading = false;
    state.trendToutiaoData.total = undefined;
  },

  [types.LOAD_TREND_TOPIC_DATA](state, data) {
    state.trendTopicData.list = state.trendTopicData.list.concat(data.list);
    state.trendTopicData.total = data.total;
    state.trendTopicData.loading = false;
  },
  [types.CLEAR_TREND_TOPIC_DATA](state) {
    state.trendTopicData.list = [];
    state.trendTopicData.loading = false;
    state.trendTopicData.total = undefined;
  },

  [types.LOAD_TREND_DETAIL](state, data) {
    if (data.type == "friend") {
      state.trendFriendDetail = data;
    } else if (data.type == "follow") {
      state.trendFollowDetail = data;
    } else if (data.type == "work") {
      state.trendWorkDetail = data;
    }
  },
  [types.POST_TREND_SEND](state, data) {
    Toast("发表成功");
  },
  [types.POST_TREND_PRAISE](state, data) {
    Toast("点赞成功");
  },
  [types.POST_TREND_COMMENT](state, data) {
    Toast("评论成功");
  },
  [types.POST_TREND_SHARE](state, data) {
    Toast("分享成功");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
