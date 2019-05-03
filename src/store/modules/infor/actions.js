import * as types from './types';
import {
  InforIndexReq,
  InforChatReq,
  InforDetailReq,
  InforSendReq
} from '../../../common/rest';

export default {
  loadInforIndexData({commit, state}, data) {
    InforIndexReq(data)
      .then((data) => {
        commit(types.LOAD_INFOR_INDEX_DATA, data.data);
      });
  },
  clearInforIndexData({commit}) {
    commit(types.CLEAR_INFOR_INDEX_DATA);
  },
  loadInforChatData({commit, state}, data) {
    InforChatReq(data)
      .then((data) => {
        commit(types.LOAD_INFOR_CHAT_DATA, data.data);
      });
  },
  clearInforChatData({commit}) {
    commit(types.CLEAR_INFOR_CHAT_DATA);
  },
  postInforSend({commit, state}, data) {
    InforSendReq(data)
      .then((data) => {
        commit(types.POST_INFOR_SEND, data.data);
      });
  }
}
