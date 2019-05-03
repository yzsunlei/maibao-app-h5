/**
 * Created by home on 2017/10/13.
 */
import {
    noop,
    isFunction,
    isObject,
    includes,
    forEach,
    reduce,
    extend,
    get
} from 'lodash';
import config from '../common/config';

class AjaxModel {
    /**
     * 配置配置
     * @type {{url: *, env: string, ns: string, param: Object}}
     */
    static defaultConfig = {
        ns: 'rest',
        domain: config.restfull,
        url: noop,
        param: {},
        defaultMethod: 'POST',
        __before: [function(data){
            let header = data.headers;
            header.append("Content-Type", "application/json");
            header.append('Accept', 'application/json');
            header.append('x-token', global.localStorage.getItem('uuid'));
            data.body = isObject(data.body) ? window.JSON.stringify(data.body): data.body;
            return data;
        }],   //默认的前置处理事件队伍
        __after: [function (config, data) {
            return data.data;
        }],     //黑夜后置处理事件队例
        cache: false                //表示不需要缓存 ['auto': 表示内存缓存]
    };
    // 处理所有Url处理方法
    static __url = [];

    //构建url方法
    static buildUrl(config, params){
        let {
            url,
            domain,
            ns
        } = config;
        if(isFunction(url)) url = url(params);
        url = build(url, params);
        if(!url.match(/^https?:\/\/|^\/\//)) {
            url = domain +'/' + ns + '/' + url;
        }
        url = url.replace(/(\w+)\/{2,}/g,'$1/');
        let param = '';
        if(config.defaultMethod === 'GET') {
            param = serializeData(params);
        }
        if(param) {
            url += url.indexOf('?') === -1 ? '?' : '&';
            url += param;
        }
        return url;

        function build(url, params){
            return url.replace(/:(\w+)/g, function($0, $1){
                let param = params[$1] || "";
                delete params[$1];
                return param;
            });
        }

        function serializeData( obj ) {
            let query = "", name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + "[" + i + "]";
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + "&";
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + "[" + subName + "]";
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += serializeData(innerObj) + "&";
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
                }
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
    }
    /**
     *
     * @param config
     */
    constructor(config){
        let namespace;
        ['url', 'ns'].forEach(function (v) {
            if(!(v in config)) throw new Error('you must define ' + v);
        });
        if(includes(AjaxModel.__url, config.url)) {
            throw new Error("cann't define same model");
        }
        AjaxModel.__url.push(config.url);
        this.__config = this.___extend(AjaxModel.defaultConfig, config);
    }

    /**
     * 设置请求参数
     * @param params [Object]
     */
    setParams(params){
        this.__tmpParams = params;
        return this;
    }
    /**
     * 构建发送请求数据
     * @param data  发送的报文
     * @param config 请求配置
     * @param SuccCall 调用成功时回调函数
     * @param ErrorCall 出错时的回调函数
     * @param AbortFn 取消时的回调函数
     * @param scope {Object} 回调的作用域
     * @returns {Promise} 返回一个Promise对象
     */
    execute(data, config, SuccCall, ErrorCall, AbortFn, scope){
        let tmpconfig = this.___extend(this.__config);
        if(isObject(config)) {
            tmpconfig = this.___extend(this.__config, config);
        }
        if(isFunction(data)) {
            scope = AbortFn;
            AbortFn = ErrorCall;
            SuccCall = config;
            config = data;
            data = null;
        }
        let params = Object.assign({},this.__tmpParams || {}, data);
        delete this.__tmpParams;
        let url = AjaxModel.buildUrl(tmpconfig, params);
        tmpconfig.url = url;
        let body = this.__buildRequest(tmpconfig, params);
        url = body.url;
        delete body.url;
        let promise = fetch(url, body);
        let self = this;
        if(isFunction(config)) {
            AbortFn = ErrorCall;
            ErrorCall = SuccCall;
            SuccCall = config;
        }
        let ret = new Promise(function(resolve, reject){
            promise.then(function(data){
                let token = data.headers.get('x-token');
                if(token) {
                    global.localStorage.setItem('uuid', token);
                }
                data.json().then(function(d){
                    if(d.errno) {
                        reject(d);
                    } else {
                        resolve(d);
                    }
                },function (d) {
                    reject(d);
                })
            }, function(data){
                if(data && data.json) {
                    data.json().then(function(d){
                        reject(d);
                    },function (d) {
                        reject(d);
                    })
                }
                reject(data);
            });
        }).then(function (d) {
            return self.__buildResponse(tmpconfig, d);
        }, function (d) {
            throw d;
        });
        if(isFunction(SuccCall)) {
            ret.then((d) => SuccCall(d), (d) => ErrorCall && ErrorCall(d));
            return null;
        } else {
            return ret;
        }
    }

    // 通过GET请求发送数据
    get(data, config, SuccCall, ErrorCall, AbortFn, scope){
        this.execute(data, Object.assign(config || {}, {defaultMethod:'GET'}), SuccCall, ErrorCall, AbortFn, scope)
    }

    // 通过POST请求发送数据
    post(data, config, SuccCall, ErrorCall, AbortFn, scope){
        this.execute(data, Object.assign(config || {}, {defaultMethod:'POST'}), SuccCall, ErrorCall, AbortFn, scope);
    }

    // 是否需要自动缓存数据
    clear(key){

    }

    // 当前对应的key是否缓存
    hasCache(key){

    }

    // 从缓存中读取数据
    getFromCache(key){

    }

    // 处理内部参数的扩展
    ___extend(...args){
    let tmpConfig = extend(true, {}, ...args);
    let argsArray = args;
    let index = argsArray.length;
    tmpConfig.__before = [];
    tmpConfig.__after = [];
    let cur = null;
    let beforeAssign = false;
    let afterAssign = false;
    while (cur = argsArray[--index]) {
        if(!beforeAssign && get(cur, '__before.0') === true) {
            tmpConfig.__before = cur.__before.slice(1);
            beforeAssign = true;
        } else if(!beforeAssign) {
            tmpConfig.__before.push.apply(tmpConfig.__before, cur.__before);
        }
        if(!afterAssign && get(cur, '__after.0') === true){
            tmpConfig.__after = cur.__after.slice(1);
            afterAssign = true;
        } else if(!afterAssign) {
            tmpConfig.__after.push.apply(tmpConfig.__after, cur.__after);
        }
        if(beforeAssign && afterAssign) break;
    }
    return tmpConfig;
}

// 构建请求数据
__buildRequest(config, params){
    let headers = new Headers();
    let self = this;
    let defaultRequest = {
        method: config.defaultMethod,
        headers: headers,
        body: params,
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
        url: config.url
    };

    let result = reduce(config.__before, function(fn1, fn2, k){
        return fn2.call(self, fn1.call(self, defaultRequest));
    });

    if(isFunction(result)) {
        result = result.call(self, defaultRequest);
    }

    if(config.defaultMethod === 'GET') {
        delete defaultRequest.body;
    }

    return result;
}

// 构建响应体
__buildResponse(config, data){
    let after = config.__after,
        self = this;
    let ret = reduce(after, function(fn1, fn2){
        return fn2.call(self, fn1.call(self, config, data));
    });
    if(isFunction(ret)) {
        return ret.call(self,config, data);
    }
    return ret;
}
}


export default AjaxModel;