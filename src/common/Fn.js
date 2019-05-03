/**
 * Created by lei.sun on 17/9/13.
 */
import {
    isEqual,
	clone,
    each
} from 'lodash';

/**
 * 在系统中直接生成一个唯一编码
 * @returns {string}
 * @constructor
 */
function GUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	}).toUpperCase();
}

/**
 * 生成随机码
 * @size 长度
 * @randomFlag 允许随机出现的字符数组
 */
function generateRandom(size, randomFlag) {
	let words = randomFlag ||  [
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	let str = '';
	let range = size || 6;
	for(let i=0; i<range; i++){
		let pos = Math.round(Math.random() * (words.length-1));
		str += words[pos];
	}

	return str;
}

/**
 * 处理动态加载Js代码
 * @param url
 * @returns {*}
 */
const lazyload = function(url, attrs){
	let cache = (lazyload.cache = lazyload.cache || {});
	if(cache[url] === undefined) {
		cache[url] = {
			resolveArr: [],
			rejectArr: []
		};
	}
	cache = cache[url];
	let resolveArr = cache.resolveArr;
	let rejectArr = cache.rejectArr;

	if(cache['status'] === 'ok') {
		return new Promise(function (resolve, reject) {
			window.setTimeout(function () {
				resolve(true);
			});
		});
	}
	let ret = null;
	let status = cache['status'];
	if(status === undefined || status === 'pending' || status === 'fail') {
		ret = new Promise(function (resolve, reject) {
			resolveArr.push(resolve);
			rejectArr.push(reject);
		});
	}

	if(status === undefined || status === 'fail') {
		let script = document.createElement('script');
		script.src = url;
		if(status === 'fail'){
			script.src += ((script.src.indexOf('?') === -1 ? '?' : '&') + 'v=' + Date.parse(new Date()));
		}
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('charset', 'utf-8');
		script.setAttribute('async', '');

		if(isObject(attrs) && !isEmpty(attrs)) {
            each(attrs, function (value, key) {
                script.setAttribute(key, value);
            });
		}

		script.onload = function (e) {
			cache['status'] = 'ok';
			lazyload.rejectArr = [];
			let resolve = null;
			while (resolve = resolveArr.shift()) {
				resolve(true);
			}
		};

		script.onerror= function(e){
			cache['status'] = 'fail';
			let reject = null;
			lazyload.resolveArr = [];
			while (reject = rejectArr.shift()){
				reject(false);
			}
		};
		cache['status'] = 'pending';
		document.head.appendChild(script);
	}

	return ret;
};

/**
 * 处理日期格式化
 * @param d
 * @param mask
 */
const formatDate = function(d, mask) {
	var zeroize = function (value, length) {
		if (!length) length = 2;
		value = String(value);
		for (var i = 0, zeros = ''; i < (length - value.length); i++) {
			zeros += '0';
		}
		return zeros + value;
	};
	return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function($0) {
		switch($0) {
			case 'd':   return d.getDate();
			case 'dd':  return zeroize(d.getDate());
			case 'ddd': return ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'][d.getDay()];
			case 'dddd':    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
			case 'M':   return d.getMonth() + 1;
			case 'MM':  return zeroize(d.getMonth() + 1);
			case 'MMM': return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
			case 'MMMM':    return ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];
			case 'yy':  return String(d.getFullYear()).substr(2);
			case 'yyyy':    return d.getFullYear();
			case 'h':   return d.getHours() % 12 || 12;
			case 'hh':  return zeroize(d.getHours() % 12 || 12);
			case 'H':   return d.getHours();
			case 'HH':  return zeroize(d.getHours());
			case 'm':   return d.getMinutes();
			case 'mm':  return zeroize(d.getMinutes());
			case 's':   return d.getSeconds();
			case 'ss':  return zeroize(d.getSeconds());
			case 'l':   return zeroize(d.getMilliseconds(), 3);
			case 'L':   var m = d.getMilliseconds();
				if (m > 99) m = Math.round(m / 10);
				return zeroize(m);
			case 'tt':  return d.getHours() < 12 ? 'am' : 'pm';
			case 'TT':  return d.getHours() < 12 ? 'AM' : 'PM';
			case 'Z':   return d.toUTCString().match(/[A-Z]+$/);
				// Return quoted strings with the surrounding quotes removed

			default:    return $0.substr(1, $0.length - 2);
		}

	});
};

/**
 * 处理浏览器平台化参数
 * @type {{browser: platform.browser, os: platform.os}}
 */
function detect(ua) {
	var os = this.os = {}, browser = this.browser = {},
		webkit = ua.match(/WebKit\/([\d.]+)/),
		android = ua.match(/(Android)\s+([\d.]+)/),
		ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
		iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
		webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
		touchpad = webos && ua.match(/TouchPad/),
		kindle = ua.match(/Kindle\/([\d.]+)/),
		silk = ua.match(/Silk\/([\d._]+)/),
		blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
		bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
		rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
		playbook = ua.match(/PlayBook/),
		chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
		firefox = ua.match(/Firefox\/([\d.]+)/)

	// Todo: clean this up with a better OS/browser seperation:
	// - discern (more) between multiple browsers on android
	// - decide if kindle fire in silk mode is android or not
	// - Firefox on Android doesn't specify the Android version
	// - possibly devide in os, device and browser hashes

	if (browser.webkit = !! webkit) browser.version = webkit[1]

	if (android) os.android = true, os.version = android[2]
	if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
	if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
	if (webos) os.webos = true, os.version = webos[2]
	if (touchpad) os.touchpad = true
	if (blackberry) os.blackberry = true, os.version = blackberry[2]
	if (bb10) os.bb10 = true, os.version = bb10[2]
	if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
	if (playbook) browser.playbook = true
	if (kindle) os.kindle = true, os.version = kindle[1]
	if (silk) browser.silk = true, browser.version = silk[1]
	if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
	if (chrome) browser.chrome = true, browser.version = chrome[1]
	if (firefox) browser.firefox = true, browser.version = firefox[1]

	os.tablet = !! (ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
	os.phone = !! (!os.tablet && (android || iphone || webos || blackberry || bb10 || (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
}

// 来对比当前两个对象是否相等
const isExceptEqual = function (nVal, oVal, except) {
	let nValue = nVal ? clone(nVal) : nVal;
	let oValue = oVal ? clone(oVal) : oVal;
    each(except, function (item) {
		try {
            delete nValue[item];
		} catch (e){}
		try {
			delete oValue[item];
		} catch (e){}
    });
    let ret = isEqual(nValue, oValue);
    return ret;
};

// 处理数据中的值唯一
const uniqueArray = function uniqueArray(array){
    var res = [];
    var json = {};
    for(var i = 0; i < array.length; i++){
        if(!json[array[i]]){
            res.push(array[i]);
            json[array[i]] = 1;
        }
    }
    return res;
};

function removeClass(all, rmv) {
	rmv = " " + (rmv || '').split(/\s+/).join(' | ') + " ";
	return (" " + all + " ")
		.replace(/\s+/gi,'  ')
		.replace(new RegExp(rmv, 'gi'), ' ')
		.replace(/\s+/gi, ' ')
		.replace(/^\s+|\s+$/gi, '');
}

function addClass(all, add) {
	all = removeClass(all, add);
	return (all + " " + add)
		.replace(/\s+/gi, ' ')
		.replace(/^\s+|\s+$/gi,'');
}

// 获取随机背景色
function randomBgColor(id) {
  var num = 0;
  if (id) {
    num = Math.floor(id % 5);
  } else {
    num = Math.floor(Math.random() * 5)
  }
  return {
    0: '#4da9eb',
    1: '#f2725e',
    2: '#16c295',
    3: '#f8b45e',
    4: '#548aac'
  }[num];
};

// mock数据包装函数
function mockFun(data = null, code = 0, msg = null) {
  return {
    "data": data,
    "code": code,
    "msg": msg
  }
}

export {
	GUID,
	generateRandom,
  lazyload,
  formatDate,
  isExceptEqual,
  uniqueArray,
	removeClass,
	addClass,
  randomBgColor,
  mockFun
};
