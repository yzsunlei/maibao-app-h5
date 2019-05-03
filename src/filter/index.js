/**
 * Created by lei.sun on 2017/10/28.
 */

import Vue from 'vue';
import {
	formatDate
} from '../common/Fn';

// 日期格式化
Vue.filter('date', function (value, fmt) {
	return formatDate(new Date(value.replace(/-/g, '/')), fmt);
});