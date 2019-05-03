// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './asset/iconfont/iconfont.css'
import './asset/style/index.less'
import './directive'
import './filter'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import router from './routes'
import store from './store/index'
import "./mockjs/index"
import "./view/common"

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Validator.addLocale(zh_CN);
Vue.use(VeeValidate,{
    local:'zh_CN',
    delay:'1000',
  }
);

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
