<template>
    <div class="wrapper">
        <app-header title="登录">
            <router-link slot="right" :to="{name: 'register',query:{redirect:$route.query.redirect}}">注册</router-link>
        </app-header>
        <div class="main bg-white">
            <app-logo />
            <div class="form">
                <form-item>
                    <app-icon class="icon-myfill" type="selected" size="large" />
                    <input type="tel" placeholder="请输入手机号" v-model="mobile">
                </form-item>
                <form-item>
                    <app-icon class="icon-unlock" type="selected" size="large" />
                    <input type="password" placeholder="请输入密码" v-model="psw">
                </form-item>
                <div style="margin:10px 0 30px;text-align:right;" class="warning"><router-link :to="{name:'forgetPwd'}">忘记密码？</router-link></div>
                <app-button @click="handleClick">立即登录</app-button>
                <div class="quick-login"><span>快速登录</span></div>
                <app-cell justify="center">
                    <app-button @click="wxLogin" round plain type="success" size="medium">
                        <app-icon class="icon-weixin" size="large" />
                        <span style="margin-left:10px;">微信登录</span>
                    </app-button>
                </app-cell>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.quick-login{
    position: relative;
    text-align: center;
    margin: 50px 0 30px;
    height: 1px;
    background-color: #5E5C5C;
    span{
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 0 10px;
    }
}
</style>

<script>
import appHeader from '@/components/header'
import formItem from '@/components/form'
import appIcon from '@/components/icon'
import appLogo from '@/components/logo'
import appButton from '@/components/button'
import appCell from '@/components/cell'
import { formMixin } from '@/mixins/mixins'
import loginService from '@/services/account/login'
export default {
    components: {
        appHeader,
        formItem,
        appIcon,
        appLogo,
        appButton,
        appCell
    },
    mixins: [formMixin],
    data() {
        return {
            mobile: '',
            psw: '',
            rules: {
                mobile: [
                    { required: true, type: 'mobile', message: '请输入正确的手机号'}
                ],
                psw: [
                    { required: true, message: '请输入正确格式密码', type: 'password' }
                ]
            }
        }
    },
    methods: {
        handleClick(e) {
            if (this.validate()) {
                loginService({
                    loginName: this.mobile,
                    loginPwd: this.psw
                })
            }
        },
        wxLogin() {
            window.JSDK.wxLogin()
        }
       
    }
}
</script>
