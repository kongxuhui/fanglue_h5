<template>
    <div>
        <form-item>
            <app-icon class="icon-myfill" type="selected" size="large" />
            <input type="tel" placeholder="请输入手机号" :value="mobile" @input="updateMobile">
        </form-item>
        <form-item>
            <app-icon class="icon-lock" type="selected" size="large" />
            <input type="tel" placeholder="请输入验证码" :value="captcha" @input="updateCaptcha">
            <app-button type="warning" round size="small" @click="send">{{timerText || '发送验证码'}}</app-button>
        </form-item>
    </div>
</template>

<script>
import formItem from '@/components/form'
import appIcon from '@/components/icon'
import appButton from '@/components/button'
import { formMixin, captchaMinxin } from '@/mixins/mixins'
export default {
    mixins: [formMixin, captchaMinxin],
    components: {
        formItem,
        appIcon,
        appButton
    },
    props: {
        preAction: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateMobile(e) {
            this.mobile = e.target.value;
            this.$emit('updateMobile', e.target.value)
        },
        updateCaptcha(e) {
            this.captcha = e.target.value;
            this.$emit('updateCaptcha', e.target.value)
        },
        send() {
            if (this.preAction) {
                if (!this.sending && this.validate(this.rule)) {
                    this.$emit('send')
                }
            } else {
                this.sendCaptcha();
            }
        }
    }
}
</script>
