<template>
    <div class="wrapper">
        <app-header title="忘记密码">
            <app-icon type="icon-back" @click.native="back" slot="left"></app-icon>
        </app-header>
        <div class="main bg-white">
            <app-logo v-if="step !== 3"/>
            <div class="form" v-show="step === 1">
                <app-captcha ref="captcha" @updateMobile="val => mobile = val" @updateCaptcha="val => captcha = val" preAction @send="send"/>
                <app-button @click="handleClick(1)" style="margin-top:30px;">下一步</app-button>
            </div>
            <div class="form" v-show="step === 2">
                <form-item>
                    <app-icon class="icon-unlock" type="selected" size="large" />
                    <input type="password" placeholder="请输入密码,密码为6-20个字符" v-model="pwd">
                </form-item>
                <form-item>
                    <app-icon class="icon-unlock" type="selected" size="large" />
                    <input type="password" placeholder="请确认密码" v-model="pwd2">
                </form-item>
                <app-button @click="handleClick(2)" style="margin-top:30px;">重置密码完成</app-button>
            </div>
            <div class="form" v-show="step === 3">
                <app-cell justify="center" style="margin-top:30px;">
                    <app-icon class="icon-success" type="success" size="large" style="margin-right:3px;"/>
                    <div>恭喜您密码重置成功</div>
                </app-cell>
                <app-button @click="handleClick(3)" style="margin-top:30px;">立即登录</app-button>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/header'
import appLogo from '@/components/logo'
import appButton from '@/components/button'
import appCaptcha from '@/components/captcha'
import formItem from '@/components/form'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import { formMixin, captchaMinxin } from '@/mixins/mixins'
import { Toast, Indicator } from 'mint-ui'
import { findUserByPhone } from '@/services/user'

export default {
    components: {
        appHeader,
        appLogo,
        appButton,
        appCaptcha,
        formItem,
        appIcon,
        appCell
    },
    mixins: [formMixin,captchaMinxin],
    data() {
        return {
            step: 1,
            pwd: '',
            pwd2: '',
            rules: {
                mobile: [
                    { required: true, message: '请输入正确的手机号', type: 'mobile' }
                ],
                captcha: [
                    { required: true, message: '请输入正确的验证码', type: 'string', length: 6 }
                ]
            },
            stepRules: {
                pwd: [
                    { required: true, message: '请输入正确格式密码', type: 'password' }
                ],
                pwd2: [
                    { required: true, message: '两次密码输入不一致', type: 'recheck', name: 'pwd' }
                ]
            }
        }
    },
    methods: {
        handleClick(step) {
            if (step === 1) {
                if (this.validate()) {
                    this.checkCaptcha().then(data => {
                        if (data.code === '000000') {
                            this.step = 2
                        } else {
                            Toast(data.message)                            
                        }
                    })
                }
            } else if (step === 2) {
                if (this.validate(this.stepRules)) {
                    this.$http.post({
                        userId: this.userId,
                        transCode: 'MUSR06',
                        loginPwd: this.pwd,
                        funType: 'updatePwd',
                        phone: this.mobile
                    }).then(data => {
                        if (data.code === '000000') {
                            this.step = 3
                        } else {
                            Toast(data.message)
                        }
                    })                    
                }
            } else {
                this.$router.push('login')
            }
        },
        send() {
            findUserByPhone(this.mobile,true,false).then(data => {
                if (data.code === '000000') {
                    this.userId = data.user.userId
                    this.$refs.captcha.sendCaptcha()
                } else {
                    Indicator.close()
                    Toast('该用户不存在')
                }
            })
        },
        intoView(event) {
            window.addEventListener('resize',function(){
                event.target.scrollIntoView()
            });
        },
        back() {
            if (this.step == 1) {
                this.$router.go(-1)
            } else if(this.step == 2) {
                this.step = 1;
            } else {
                this.$router.push('login')
            }
        }
    }
}
</script>
