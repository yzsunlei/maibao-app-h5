import * as types from './types';
import {
  TrendFriendReq,
  TrendFollowReq,
  TrendWorkReq,
  TrendDetailReq,
  TrendFollowRecommandTopicReq,
  TrendFollowRecommandLoveReq,
  TrendFollowToutiaoReq,
  TrendSendReq,
  TrendPraiseReq,
  TrendCommentReq,
  TrendShareReq,
  TrendFollowAddReq
} from '../../../common/rest';

export default {
  loadTrendFriendData({commit, state}, data) {
    TrendFriendReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_FRIEND_DATA, data.data);
      });
  },
  clearTrendFriendData({commit}) {
    commit(types.CLEAR_TREND_FRIEND_DATA);
  },
  loadTrendFollowData({commit, state}, data) {
    TrendFollowReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_FOLLOW_DATA, data.data);
      });
  },
  clearTrendFollowData({commit}) {
    commit(types.CLEAR_TREND_FOLLOW_DATA);
  },
  loadTrendWorkData({commit, state}, data) {
    TrendWorkReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_WORK_DATA, data.data);
      });
  },
  clearTrendWorkData({commit}) {
    commit(types.CLEAR_TREND_WORK_DATA);
  },
  loadTrendToutiaoData({commit, state}, data) {
    TrendFollowToutiaoReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_TOUTIAO_DATA, data.data);
      });
  },
  clearTrendToutiaoData({commit}) {
    commit(types.CLEAR_TREND_TOUTIAO_DATA);
  },
  loadTrendTopicData({commit, state}, data) {
    TrendFollowRecommandTopicReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_TOPIC_DATA, data.data);
      });
  },
  clearTrendTopicData({commit}) {
    commit(types.CLEAR_TREND_TOPIC_DATA);
  },

  loadTrendDetail({commit, state}, data) {
    TrendDetailReq(data)
      .then((data) => {
        commit(types.LOAD_TREND_DETAIL, data.data);
      });
  },
  postTrendSend({commit, state}, data) {
    TrendSendReq(data)
      .then((data) => {
        commit(types.POST_TREND_SEND, data.data);
      });
  },
  postTrendPraise({commit, state}, data) {
    TrendPraiseReq(data)
      .then((data) => {
        commit(types.POST_TREND_PRAISE, data.data);
      });
  },
  postTrendComment({commit, state}, data) {
    TrendCommentReq(data)
      .then((data) => {
        commit(types.POST_TREND_COMMENT, data.data);
      });
  },
  postTrendShare({commit, state}, data) {
    TrendShareReq(data)
      .then((data) => {
        commit(types.POST_TREND_SHARE, data.data);
      });
  }
}
