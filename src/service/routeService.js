import Header from 'components/common/Header.vue';
import Footer from 'components/common/Footer.vue';
import floatContent from 'components/common/FloatContent.vue';
import {
  isObject,
  isFunction,
  isEmpty,
  get,
  set,
  keys as getKeys,
  compact,
  each,
  isUndefined
} from 'lodash';

import {
  MessageBox,
  Indicator
} from 'mint-ui';
import {
  platform
} from '../common/Fn';
import User from 'src/service/User';

// 构建路由的扩展方法
export const extendRoute = (allComponent, routeConf)=>{
  let childRoute = {};
  let buildKeyName = function (keys) {
    return keys.replace(/_(\S)|(^\S)/gi, function (all, rep1, rep2) {
      return String(rep1 || rep2).toUpperCase();
    });
  };
  let resultRoute = getKeys(routeConf).map((keys)=>{
    let keyName = buildKeyName(keys);
    let currentRoute = routeConf[keys];
    if(keyName === 'OtherWise') {
      return currentRoute;
    } else if(currentRoute.parentPath){
      childRoute[keys] = currentRoute;
      return ;
    }
    const retVal = {
      name: keys,
      path: currentRoute['path']
    };
    let header = currentRoute.header;
    let footer = currentRoute.footer;
    retVal.bodyClassName = isUndefined(currentRoute.bodyClassName) ? "bgc-grey" : currentRoute.bodyClassName;

    if(!allComponent[keyName]) {
      console.warn(`current route cann't find ${keyName} component!`);
    }
    if(header || footer) {
      retVal.components = {};
      let isRenderHeader = true;

      if(currentRoute.headerVisible === 'auto' || currentRoute.headerVisible === undefined){
        if(platform.isWeChat()){
          isRenderHeader = false;
        }
      } else if(currentRoute.headerVisible === 'hide') {
        isRenderHeader = false;
      }

      if(header) {
        if(isRenderHeader) {
          retVal.components.header = Header;
        }
        if(isObject(header) || isFunction(header)) retVal.headerInfo = header;
      }
      if(footer) {
        retVal.components.footer = Footer;
        if(isObject(footer) || isFunction(footer)) retVal.footerInfo = footer;
      }
      retVal.components.default = allComponent[keyName];
    } else {
      retVal.component = allComponent[keyName];
    }

    if (currentRoute.floatContentVisible == true) {
      retVal.components.floatContent = floatContent;
    }

    // 构建beforeEnter
    var beforeEnterFns = [];
    // 强制登录
    if(currentRoute.checkLogin === 'force'){
      beforeEnterFns.push(function () {
        return needLogin();
      });
    }
    // 可选登录
    if(currentRoute.checkLogin === 'optional'){
      beforeEnterFns.push(function () {
        return needLogin(true);
      });
    }
    // 微信分享
    if(currentRoute.needShare === true || currentRoute.needShare === undefined){
      set(retVal, 'meta.needShare', true);
    } else {
      set(retVal, 'meta.needShare', false);
    }

    if(beforeEnterFns.length){
      retVal.beforeEnter = function (to, from, next) {
        Promise.all(beforeEnterFns.map(function (item) {
          return item(to, from, next);
        })).then(function (datas) {
          var userInfo;
          if((userInfo = get(datas, '0')) && userInfo.id && 'avator' in userInfo){
            to.params.userInfo = userInfo;
          }
          next(true);
        }).catch(function (e) {
          console.warn(e);
          if(e === 'go to login') {
            next({name: 'user_login'});
          } else {
            next(false);
            setTimeout(()=>{
              if(!get(__router, 'currentRoute.name')) {
                location.href = '/';
              }
            },200)
          }
        });
      }
    }
    // 处理路由的重定向
    if(currentRoute.redirect) {
      retVal.redirect = currentRoute.redirect;
    }
    return retVal;
  });

  resultRoute = compact(resultRoute);
  each(getKeys(childRoute), function (keys) {
    let currentRoute = childRoute[keys];
    each(resultRoute, function (resultValue, indexValue) {
      if(currentRoute.parentPath == resultValue.name) {
        let children;
        let keyName = buildKeyName(keys);
        if(!(children = resultValue.children)) {
          children = resultValue.children = [];
        }
        if(!allComponent[keyName]) {
          console.warn(`cann't find compoent ${keyName}`);
        }
        let router = {
          name: keys,
          path: currentRoute.path,
          component: allComponent[keyName]
        };
        if(!isUndefined(resultValue.headerInfo)) {
          router.headerInfo = resultValue.headerInfo;
        }
        if(!isUndefined(resultValue.bodyClassName)) {
          router.bodyClassName = resultValue.bodyClassName;
        }
        if(!isUndefined(resultValue.beforeEnterFns)) {
          router.beforeEnterFns = resultValue.beforeEnterFns;
        }

        // 微信分享
        if(!isUndefined(resultValue.needShare)){
          set(router, 'meta.needShare', resultValue.needShare);
        }

        children.push(router);
        return false;
      }
    })
  });
  return resultRoute;
};


// 处理需要登录的路由控制
export const needLogin = function(isignore){
  return User.userIsLogin(isignore).then((userInfo)=>{
    return Promise.resolve(userInfo);
  }, function (result) {
    if(result === 'confirm') {
      return Promise.reject('go to login');
    } else if(result === 'cancel') {
      Indicator.close();
      return Promise.reject(false);
    } else if(isignore) {
      return Promise.resolve(true);
    }
  });
};
