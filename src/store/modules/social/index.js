import * as types from './types';
import actions from './actions';
import { extend } from 'lodash';

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// states
const state = {
  socialFriendData: {
    list: [],
    total: undefined
  },
  socialBookData: {
    list: [],
    total: undefined
  },
  socialExploreData: {
    list: [],
    total: undefined
  },
  socialExploreTopicData: {
    list: [],
    total: undefined
  },
  socialExploreDiscoverData: {
    list: [],
    total: undefined
  },
  socialExploreLocationData: {
    list: [],
    total: undefined
  },
};

// getters
const getters = {
  getSocialFriendData: (state) => state.socialFriendData,
  getSocialBookData: (state) => state.socialBookData,
  getSocialExploreData: (state) => state.socialExploreData,
  getSocialExploreTopicData: (state) => state.socialExploreTopicData,
  getSocialExploreDiscoverData: (state) => state.socialExploreDiscoverData,
  getSocialExploreLocationData: (state) => state.socialExploreLocationData,
};

// mutations
const mutations = {
  [types.LOAD_SOCIAL_FRIEND_DATA](state, data) {
    state.socialFriendData.list = state.socialFriendData.list.concat(data.list);
    state.socialFriendData.total = data.total;
  },
  [types.CLEAR_SOCIAL_FRIEND_DATA](state) {
    state.socialFriendData.list = [];
    state.socialFriendData.total = undefined;
  },

  [types.LOAD_SOCIAL_BOOK_DATA](state, data) {
    state.socialBookData.list = state.socialBookData.list.concat(data.list);
    state.socialBookData.total = data.total;
  },
  [types.CLEAR_SOCIAL_BOOK_DATA](state) {
    state.socialBookData.list = [];
    state.socialBookData.total = undefined;
  },

  [types.LOAD_SOCIAL_EXPLORE_DATA](state, data) {
    state.socialExploreData.list = state.socialExploreData.list.concat(data.list);
    state.socialExploreData.total = data.total;
  },
  [types.CLEAR_SOCIAL_EXPLORE_DATA](state) {
    state.socialExploreData.list = [];
    state.socialExploreData.total = undefined;
  },

  [types.LOAD_SOCIAL_EXPLORE_TOPIC_DATA](state, data) {
    state.socialExploreTopicData.list = state.socialExploreTopicData.list.concat(data.list);
    state.socialExploreTopicData.total = data.total;
  },
  [types.CLEAR_SOCIAL_EXPLORE_TOPIC_DATA](state) {
    state.socialExploreTopicData.list = [];
    state.socialExploreTopicData.total = undefined;
  },

  [types.LOAD_SOCIAL_EXPLORE_DISCOVER_DATA](state, data) {
    state.socialExploreDiscoverData.list = state.socialExploreDiscoverData.list.concat(data.list);
    state.socialExploreDiscoverData.total = data.total;
  },
  [types.CLEAR_SOCIAL_EXPLORE_DISCOVER_DATA](state) {
    state.socialExploreDiscoverData.list = [];
    state.socialExploreDiscoverData.total = undefined;
  },

  [types.LOAD_SOCIAL_EXPLORE_LOCATION_DATA](state, data) {
    state.socialExploreLocationData.list = state.socialExploreLocationData.list.concat(data.list);
    state.socialExploreLocationData.total = data.total;
  },
  [types.CLEAR_SOCIAL_EXPLORE_LOCATION_DATA](state) {
    state.socialExploreLocationData.list = [];
    state.socialExploreLocationData.total = undefined;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
