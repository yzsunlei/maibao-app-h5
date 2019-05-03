<template>
	<section class="body user-login">
		<div class="logo">
			<img class="img" src="../../../asset/image/logo.png"/>
		</div>
		<div class="login-form">
			<div class="login-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-phone c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="text" placeholder="手机号" v-model="ruleForm.target">
				</div>
			</div>
			<div class="login-form-item flex-auto">
        <span class="input-icon flex-fixed">
          <i class="iconfont icon-password c-font"></i>
        </span>
				<div class="input-wrap">
					<input class="input" type="password" placeholder="密码" v-model="ruleForm.password">
				</div>
			</div>
			<div class="login-form-button flex-auto">
				<button class="login-form-submit" @click="submitForm">登录</button>
			</div>
			<div class="login-form-link">
				<ul class="flex-auto">
					<li><router-link :to="{name: 'user_register'}" class="c-font">快速注册</router-link></li>
					<li class="tar"><router-link :to="{name: 'user_forgetpwd'}" class="c-font">忘记密码</router-link></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
  import {
  	UserLoginReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        ruleForm: {
          target: '',
          password: '',
        },
        rules: {
          target: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      submitForm() {
        const self = this;
        self.$validator.validateAll().then(valid => {
          if (valid) {
            UserLoginReq(this.ruleForm)
              .then((data) => {
//                this.$store.dispatch('loadUserInfo');
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
