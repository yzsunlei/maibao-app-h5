import * as types from './types';
import {
  SocialFriendReq,
  SocialBookReq,
  SocialExploreReq,
  SocialExploreTopicReq,
  SocialExploreDiscoverReq,
  SocialExploreLocationReq
} from '../../../common/rest';

var cache = {};
export default {
  loadSocialFriendData({commit, state}, data) {
    SocialFriendReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_FRIEND_DATA, data.data);
      });
  },
  loadSociaBookData({commit, state}, data) {
    SocialBookReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_BOOK_DATA, data.data);
      });
  },

  loadSocialExploreData({commit, state}, data) {
    if (cache['explore_params']) {
      if (cache['explore_params']['type'] != data['type']) {
        commit(types.CLEAR_SOCIAL_EXPLORE_DATA);
        cache['explore_params'] = data;
      }
    } else {
      cache['explore_params'] = data;
    }
    SocialExploreReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_EXPLORE_DATA, data.data);
      });
  },
  clearSocialExploreData({commit}) {
    commit(types.CLEAR_SOCIAL_EXPLORE_DATA);
  },
  loadSocialExploreTopicData({commit, state}, data) {
    if (cache['explore_topic_params']) {
      if (cache['explore_topic_params']['type'] != data['type']) {
        commit(types.CLEAR_SOCIAL_EXPLORE_TOPIC_DATA);
        cache['explore_topic_params'] = data;
      }
    } else {
      cache['explore_topic_params'] = data;
    }
    SocialExploreTopicReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_EXPLORE_TOPIC_DATA, data.data);
      });
  },
  clearSocialExploreTopicData({commit}) {
    commit(types.CLEAR_SOCIAL_EXPLORE_TOPIC_DATA);
  },
  loadSocialExploreDiscoverData({commit, state}, data) {
    SocialExploreDiscoverReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_EXPLORE_DISCOVER_DATA, data.data);
      });
  },
  clearSocialExploreDiscoverData({commit}) {
    commit(types.CLEAR_SOCIAL_EXPLORE_DISCOVER_DATA);
  },
  loadSocialExploreLocationData({commit, state}, data) {
    SocialExploreLocationReq(data)
      .then((data) => {
        commit(types.LOAD_SOCIAL_EXPLORE_LOCATION_DATA, data.data);
      });
  },
  clearSocialExploreLocationData({commit}) {
    commit(types.CLEAR_SOCIAL_EXPLORE_LOCATION_DATA);
  },
}
