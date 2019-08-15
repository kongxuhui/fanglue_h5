import { Toast } from 'mint-ui'
import captchaService from '@/services/account/captcha'

export const formMixin = {
    data() {
        return {
            rules: {}
        }
    },
    methods: {
        validate(rules) {
            let pass = true;
            const allRules = rules || this.rules;

            function pattern(rule, value, self) {
                const type = rule.type;

                if (type) {
                    switch (type) {
                        case 'mobile':
                            if (!/^1[34578]\d{9}$/.test(value)) {
                                pass = false;
                                Toast(rule.message);
                            }
                            break;
                        case 'string':
                            if ( rule.length && value.length !== rule.length ) {
                                pass = false;
                                Toast(rule.message);
                            }
                            if ( rule.range && rule.range.length ) {
                                let min = rule.range[0]
                                let max = rule.range[1] || ''
                                if (!new RegExp(`^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]{${min},${max}}$`).test(value)) {
                                    pass = false;
                                    Toast(rule.message);
                                }                               
                            }
                            break;
                        case 'recheck':
                            if ( value !== self[rule.name] ) {
                                pass = false;
                                Toast(rule.message);
                            }
                            break;
                        case 'idCard':
                            if ( !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value) ) {
                                pass = false;
                                Toast(rule.message);
                            }
                            break;
                        case 'password':
                            if ( !/^[\da-zA-Z!#$%^&*_,./<>{}/(/)]{6,20}$/.test(value) ) {
                                pass = false;
                                Toast(rule.message);
                            }
                            break;
                    }
                }
            }
            
            for (const key in allRules) {
                if (!pass) {
                    return false;
                }

                if (allRules.hasOwnProperty(key)) {
                    const rules = allRules[key];

                    rules.forEach(rule => {
                        if (pass) {
                            if (rule.required) {
                                let value = this[key].replace(/^\s+|\s+$/g,"");
                                if (value === '') {
                                    pass = false;
                                    Toast(rule.message);
                                } else {    
                                    pattern(rule,value,this);
                                }
                            }
                        }
                    });                    
                }
            }
            return pass;
        }
    }
}

export const captchaMinxin = {
    data() {
        return {
            mobile: '',
            captcha: '',
            rule: {
                mobile: [
                    { required: true, message: '请输入正确的手机号', type: 'mobile' }
                ]
            },
            timerText: '',
            sending: false
        }
    },
    methods: {
        sendCaptcha() {
            if (!this.sending && this.validate(this.rule)) {
                this.sending = true;
                let timer = 60;
                this.timerText = timer + '秒后重新发送';

                this.timerId = setInterval(() => {
                    if (--timer > 0) {
                        this.timerText = timer + '秒后重新发送';
                    } else {
                        this.endSendCaptcha();
                    }
                },1000);
                captchaService.send(this.mobile)
            }
        },
        endSendCaptcha() {
            this.sending = false;
            this.timerText = '';
            clearInterval(this.timerId);
        },
        checkCaptcha() {
            return captchaService.check(this.mobile, this.captcha)
        }
    }
}