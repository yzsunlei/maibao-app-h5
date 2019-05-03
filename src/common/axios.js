import axios from 'axios';
import {
  Indicator,
  Toast
} from 'mint-ui';
import {
	setSessionStorage,
	getSessionStorage,
	removeSessionStorage
} from './mixin';
class Http {
  constructor(){
    this.Domain = '';
  }
  require(options) {
    if (!options.url) throw new Error('api 不能为空');
    if (!options.params) { options.params = {} };
    if (!options.methods) { options.methods = 'POST' }; //不传递方法默认为POST
    if (!options.loadingVisble) { options.loadingVisble = true }; // 不传递默认开启loading
    if (!options.loadingText) { options.loadingText = '加载中...' };
    if(options.loadingVisble){
        Indicator.open({
            text: options.loadingText,
            spinnerType: 'snake'
        })
    };
    // options.params.MemberToken = options.params.MemberToken ? options.params.MemberToken : getSessionStorage('MemberToken');
    return new Promise((resolve,reject) => {
        return axios({
            method: options.methods,
            url: options.url,
            baseURL: this.Domain,
            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            // withCredentials: true, // default
            headers: {
                'Content-Type':'text/plain'
            },
            data: options.params
        }).then(response => {
            Indicator.close();
            if(response.data.code === 0){ //请求成功
                return resolve(response.data)
            }else{
                if(response.data.code === 2){ //未登录
                //   router.push('/Login')
                }
                Toast({
                    message: response.data.msg,
                    position: 'bottom'
                });
                return reject(response.data)
            }
        },error => {
            Indicator.close();
            Toast({
                message: response.data.msg || error,
                position: 'bottom'
            });
            return reject(error)
        })
    })
  }
}

export default Http;
