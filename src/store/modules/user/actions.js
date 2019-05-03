/**
 * Created by lei.sun on 2017/9/11.
 */
import * as types from './types';
import {
  UserInfoReq,
  UserLogoutReq
} from '../../../common/rest';

export default {
  // 用户信息
  loadUserInfo({commit}) {
	  UserInfoReq().then(data => {
      commit(types.LOAD_USER_INFO, data.data);
    });
  },
  // 用户退出
  clearUserInfo({commit}) {
    UserLogoutReq.then(data => {
      commit(types.CLEAR_USER_INFO);
      this.$router.push("/user/login");
    });
  }
}
