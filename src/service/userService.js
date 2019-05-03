import {
  get,
  isEmpty,
  isString,
  isObject
} from 'lodash';
import {
  MessageBox
} from 'mint-ui';
import {
  UserInfoModel
} from '../model/RestModel';
import defer from 'src/class/Promise';

const cache = {
  status: 'init',
  callbacks: []
};

export default class User {
  // 用户是否登录
  static userIsLogin(preventDefault, preventDefaultAction){
    let store = global.__router.app.$store;

    // 如果被reject，则直接不用处理
    let retPromise;
    switch (cache.status) {
      case 'init':
        cache.status = 'pending';
        retPromise = UserInfoModel.getInstance().execute().then((userInfo)=>{
          cache.status = 'resolve';
          store.dispatch('updateUserInfo', userInfo);
          let current = null;
          while (current = cache.callbacks.pop()) {
            current.resolve(userInfo);
          }
          return Promise.resolve(userInfo);
        }, function (status) {
          if([100, 101].indexOf(get(status, 'errno')) != -1) {
            cache.status = 'reject';
          } else {
            cache.status = 'init';
          }
          let current = null;
          let info = 'user is not login';
          while (current = cache.callbacks.pop()) {
            current.reject(info);
          }
          return Promise.reject(info)
        });
        break;
      case 'pending':
        let defer1 = defer();
        cache.callbacks.push(defer1);
        retPromise = defer1.promise;
        break;
      case 'resolve':
      case 'reject':
        retPromise = new Promise((resolve, reject)=>{
          let userInfo = get(store, 'state.__GLOBAL__STATE__.USERINFO');
          if(isEmpty(userInfo)) {
            reject('user is not login');
          } else {
            resolve(userInfo);
          }
        });
        break;
    }

    return retPromise.catch(() => {
      let preventDefaultData = false;
      let message = '当前页面需要登录后才能操作';
      let title = '登录提示';
      if(isString(preventDefault)) {
        message = preventDefault;
      } else if(isObject(preventDefault)){
        message = preventDefault.message;
        title = preventDefault.title;
      } else if(preventDefault === true){
        preventDefaultData = true;
      }
      return preventDefaultData ? Promise.reject('user is not login') : Promise.resolve(MessageBox.confirm(message, title).then((data)=>{
        if(preventDefaultAction !== true) {
          global.__router.push({
            name: 'user_login'
          });
        }
        return Promise.reject(data);
      }));
    });

    return retPromise;
  }

  // 更新用户信息
  static updateUserInfo(userInfo){
    let store = global.__router.app.$store;
    store.dispatch('updateUserInfo', userInfo);
    cache.status = 'init';
    return Promise.resolve(userInfo);
  }

  // 退出登录
  static logout(){
    let store = global.__router.app.$store;
    cache.status = 'init';
    localStorage.removeItem('uuid');
    store.dispatch('setUserInfo', {});
    return Promise.resolve();
  }
}
