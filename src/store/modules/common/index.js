import * as types from './types';
import actions from './actions';
import {
  get,
  set,
  isFunction,
  isObject,
  isString,
  noop,
  extend,
  merge
} from 'lodash';
import Router from 'src/routes';

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  titleInfo: {
    showHeader: true,
    fixed: true,
    title: '',
    className: '',
    left: {
      text: '',
      callback: noop,
      className: ''
    },
    right: {
      text: '',
      callback: noop,
      className: ''
    }
  }
};

// getters
const getters = {
  titleInfo: state => state.titleInfo
};

// mutations
const mutations = {
  [types.SET_HEADER](state, info){
    let defaultHeaderSetting = {
      left: {
        text: '<button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text">&nbsp;&nbsp;&nbsp;&nbsp;</label></button>',
        callback: function ($event) {
          Router.back();
        },
        className: ''
      },
      right: {
        text: '',
        callback: noop,
        className: ''
      }
    };
    let leftKey = 'left.callback';
    let result = {
      showHeader: info.showHeader === undefined ? true : false,
      fixed: info.fixed === undefined ? true : false,
      title: info.title,
      className: info.className
    };
    if(info.left === false) {
      result.left = false;
    } else if(isObject(info.left)) {
      result.left = extend({
        className: info.leftClassName || ''
      }, info.left);
    } else if(isString(info.left)){
      result.left = extend(defaultHeaderSetting.left, {
        text: info.left,
        className: info.leftClassName || ''
      });
    } else {
      result.left = defaultHeaderSetting.left;
    }
    if(!info.right){
      result.right = false;
    } else if(isObject(info.right)){
      result.right = extend(defaultHeaderSetting.right, {
        className: info.rightClassName || ''
      }, info.right);
    } else if(isString(info.right)){
      result.right = extend(defaultHeaderSetting.right, {
        text: info.right,
        className: info.rightClassName || ''
      });
    }
    let leftCallBack = get(result, leftKey);
    if(isString(leftCallBack)) {
      set(result, leftKey, function ($event) {
        Router.push({name: leftCallBack});
      })
    } else if(leftCallBack && !isFunction(leftCallBack)) {
      set(result, leftKey, noop);
    }
    let rightKey = 'right.callback';
    let rightCallBack = get(result, rightKey);
    if(isString(rightCallBack)) {
      set(result, rightKey, function ($event) {
        Router.push({name: rightCallBack});
      });
    } else if(rightCallBack && !isFunction(rightCallBack)) {
      set(result, rightKey, noop);
    }
    state.titleInfo = result;
  },
  [types.MERGE_HEADER](state, info){
    state.titleInfo = merge(true, state.titleInfo, info);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
