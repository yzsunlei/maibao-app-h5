<template>
	<section class="body user-register">
		<div class="logo">
			<img class="img" src="../../../asset/image/logo.png"/>
		</div>
		<div class="register-form" ref="register">
			<div class="register-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-phone c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="text" placeholder="手机号" v-model="ruleForm.target">
				</div>
			</div>
			<div class="register-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-clock c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="text" placeholder="验证码" v-model="ruleForm.verify">
					<span class="verify" @click="getVerify">获取验证码</span>
				</div>
			</div>
			<div class="register-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-password c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="password" placeholder="密码" v-model="ruleForm.password">
				</div>
			</div>
			<div class="register-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-password c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="password" placeholder="重复密码" v-model="ruleForm.password_confirmation">
				</div>
			</div>
			<div class="register-form-button flex-auto">
				<button class="register-form-submit" @click="submitForm">注册</button>
			</div>
			<div class="register-form-link">
				<ul class="flex-auto">
					<li><a href="#" class="c-font">同意《协议》</a></li>
					<li class="tar"><router-link :to="{name: 'user_register'}" class="c-font">去登录</router-link></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
  import {
  	UserRegisterReq,
    UserVerifyReq
  } from '../../../common/rest';
  import {
    Toast
  } from "mint-ui";

  export default {
    data() {
      return {
        ruleForm: {
          target: '',
          verify: '',
          password: '',
          password_confirmation: '',
          checked: true
        },
        rules: {
	        target: [
		        { required: true, message: '请输入手机', trigger: 'blur' }
	        ],
	        verify: [
		        { required: true, message: '请输验证码', trigger: 'blur' }
	        ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码不得少于6位', trigger: 'blur' },
            { max: 20, message: '密码不得多于20位', trigger: 'blur' }
          ],
          password_confirmation: [
            { required: true, message: '请重复密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
	    getVerify() {
	    	let target = this.ruleForm.target;
	    	if (!/^1[3|4|5|7|8][0-9]{9}$/.test(target) && !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(target)) {
			    return Toast({
				    message: '手机/邮箱号码格式不正确'
			    });
        }

		    UserVerifyReq({target: target})
          .then(data => {
            Toast('验证码发送成功');
          });
      },
      submitForm() {
        const self = this;
        if (self.ruleForm.password != self.ruleForm.password_confirmation) {
          return Toast({
            message: '两次输入的密码不一致',
          });
        }

        self.$validator.validateAll().then(valid => {
          if (valid) {
	          UserRegisterReq(this.ruleForm)
              .then(data => {
                this.$router.replace('/');
              });
            } else {
              return false;
            }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
