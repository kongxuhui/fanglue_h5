<template>
    <div class="wrapper">
        <app-header title="注册"></app-header>
        <div class="main bg-white">
            <app-logo />
            <div class="form">
                <!-- <form-item>
                    <app-icon class="icon-myfill" type="selected" size="large" />
                    <input type="text" placeholder="请输入手机号" v-model="mobile">
                </form-item>
                <form-item>
                    <app-icon class="icon-lock" type="selected" size="large" />
                    <input type="text" placeholder="请输入验证码" v-model="captcha">
                    <app-button type="warning" round size="small" @click="sendCaptcha">{{timerText || '发送验证码'}}</app-button>
                </form-item> -->
                <app-captcha @updateMobile="(val) => mobile = val" @updateCaptcha="val => captcha = val"/>
                <form-item>
                    <app-icon class="icon-unlock" type="selected" size="large" />
                    <input type="password" placeholder="请输入密码,密码为6-20个字符" v-model="psw" @focus="intoView">
                </form-item>
                <!-- <form-item>
                    <app-icon class="icon-unlock" type="selected" size="large" />
                    <input type="password" placeholder="请确认密码" v-model="psw2">
                </form-item> -->
                <app-cell align="top" style="font-size:12px;padding:20px 0;">
                    <checkbox class="warning" v-model="checked"/>
                    <div>
                        <span class="gray">我已阅读并同意</span>
                        <router-link :to="{name:'static',query:{title:'注册协议',content:'agreement'}}" class="warning">&lt;&lt;方略陆港多式联运使用条款和隐私协议&gt;&gt;</router-link>
                    </div>
                </app-cell>
                <app-button @click="handleClick()" :disabled="!checked">注册并登录</app-button>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/header'
import formItem from '@/components/form'
import checkbox from '@/components/form/checkbox'
import appIcon from '@/components/icon'
import appLogo from '@/components/logo'
import appButton from '@/components/button'
import appCell from '@/components/cell'
import appCaptcha from '@/components/captcha'
import { formMixin, captchaMinxin } from '@/mixins/mixins'
import { Toast, Indicator } from 'mint-ui'
import loginService from '@/services/account/login'

export default {
    components: {
        appHeader,
        formItem,
        appIcon,
        appLogo,
        appButton,
        checkbox,
        appCell,
        appCaptcha
    },
    mixins: [formMixin, captchaMinxin],
    data() {
        return {
            psw: '',
            psw2: '',
            rules: {
                mobile: [
                    { required: true, message: '请输入正确的手机号', type: 'mobile' }
                ],
                captcha: [
                    { required: true, message: '请输入正确的验证码', type: 'string', length: 6 }
                ],
                psw: [
                    { required: true, message: '请输入正确格式密码', type: 'password' }
                ],
                // psw2: [
                //     { required: true, message: '两次密码输入不一致', type: 'recheck', name: 'psw' }
                // ]
            },
            checked: true
        }
    },
    methods: {
        handleClick(e) {
            if (this.checked && this.validate()) {
                this.checkCaptcha().then(data => {
                    if (data.code === '000000') {
                        this.$http.post({
                            transCode: 'MUSR02',
                            userName: this.mobile,
                            loginPwd: this.psw,
                            funType: 'userRegister',
                            phone: this.mobile,
                            userSource: 1
                        }, true, false)
                        .then(data => {
                            if (data.code === '000000') {
                                loginService({
                                    loginName: this.mobile,
                                    loginPwd: this.psw
                                }, false)
                            } else {
                                Indicator.close()
                                Toast(data.message)
                            }
                        })
                    } else {
                        Toast(data.message)
                    }
                })               
            }
        },
        intoView(event) {
            window.addEventListener('resize',function(){
                event.target.scrollIntoView()
            });
        }
    }
}
</script>
