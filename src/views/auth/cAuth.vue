<template>
    <div class="wrapper">
        <app-header title="企业认证">
            <app-icon type="icon-back" @click.native="back" slot="left"></app-icon>
        </app-header>
        <div class="main bg-white">
            <app-logo v-if="step !== 4"/>
            <div class="form" v-if="step === 1">
                <form-item>
                    <label>企业名称</label>
                    <input type="text" v-model="corpName">
                </form-item>
                <form-item>
                    <label>企业简称</label>
                    <input type="text" v-model="corpNameShort">
                </form-item>
                 <form-item>
                    <label>营业执照编号</label>
                    <input type="text" v-model="bizlicenseNum">
                </form-item>
                 <form-item>
                    <label>法定代表人</label>
                    <input type="text" v-model="legalRepresentative">
                </form-item>
                <app-button @click="handleClick(1)" style="margin-top:30px;">下一步</app-button>
            </div>
            <div class="form text-center" v-else-if="step === 2">
                <div @click="upload">
                    <img src="../../assets/images/front.jpg" alt="">
                    <div>点击上传企业营业执照</div>
                </div>
                <app-button @click="handleClick(2)" style="margin-top:30px;">下一步</app-button>
            </div>
            <div class="form" v-else-if="step === 3">
                <form-item>
                    <label>联系人</label>
                    <input type="text" v-model="contacts">
                </form-item>
                 <form-item>
                    <label>手机号</label>
                    <input type="tel" v-model="mobile">
                </form-item>
                 <form-item>
                    <label>办公地址</label>
                    <input type="text" v-model="address">
                </form-item>
                <app-button @click="handleClick(3)" style="margin-top:30px;">提交审核</app-button>
            </div>
            <div class="form" v-else>
                <app-cell justify="center" style="margin-top:30px;">
                    <app-icon class="icon-info" type="selected" style="margin-right:3px;font-size:30px;"/>
                    <div>您的资料已提交成功</div>
                </app-cell>
                <div class="gray">* 预计1~3个工作日内审核完毕，审核结果会发送到您注册时的手机上。</div>
                <app-button @click="handleClick(4)" style="margin-top:30px;">返回</app-button>
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
import { Toast } from 'mint-ui'

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
            rules: {
                corpName: [
                    { required: true, message: '请输入企业名称' }
                ],
                corpNameShort: [
                    { required: true, message: '请输入企业简称' }
                ]
            },
            stepRules1: {
                bizlicenseImg: [
                    { required: true, message: '请上传企业营业执照' },
                ]
            },
            stepRules2: {
                contacts: [
                    { required: true, message: '请输入联系人' }
                ],
                mobile: [
                    { required: true, message: '请输入正确手机号', type: 'mobile' }
                ],
                address : [
                    { required: true, message: '请输入办公地址' }
                ]
            },
            corpNameShort: '',
            contacts: '',
            bizlicenseNum: '',
            date: '',
            address: '',
            mobile: '',
            corpName: '',
            legalRepresentative: '',
            bizlicenseImg: 'http://192.168.139.202:2222/www/contract/6/2018/04/17/024143/1523932640728.jpg'
        }
    },
    methods: {
        step2() {
            this.$http.post({
                transCode: 'MCER01',
                funType: 'findAll',
                bizlicenseNum: this.bizlicenseNum,
                noAuditStatus: 3
            }).then(data => {
                if (data.totalCount == 0) {
                    this.step = 2
                } else {
                    Toast('此公司已认证或已提交认证申请，请核实！')
                }
            })
        },
        handleClick(step) {
            if (step === 1) {
                if (this.validate()) {
                    if (/^[0-9a-zA-Z]+$/.test(this.bizlicenseNum)) {
                        if (this.legalRepresentative.trim().length > 0) {
                            this.step2()
                        } else {
                            Toast('请输入法定代表人')
                        }
                    } else {
                        Toast('请输入正确的营业执照编号')
                    }
                }
            } else if (step === 2) {
                if (this.validate(this.stepRules1)) {
                    this.step = 3;
                }
            } else if (step === 3) {
                if (this.validate(this.stepRules2)) {
                    this.$http.post({
                        transCode: 'MCER01',
                        funType: 'add',
                        userId: this.$store.state.user.userInfo.userId,
                        userName: this.$store.state.user.userInfo.userName,
                        applyType: '2',
                        bizlicenseImg: this.bizlicenseImg,
                        bizlicenseNum: this.bizlicenseNum,
                        corpName: this.corpName,
                        contacts: this.contacts,
                        contactsTel: this.mobile,
                        officeAddr: this.address,
                        legalRepresentative: this.legalRepresentative,
                        corpNameShort: this.corpNameShort
                    }).then(data => {
                        if (data.code === '000000') {
                            this.step = 4;
                        } else {
                            Toast(data.message);
                        }
                    })
                }              
            } else {
                this.$router.push('userCenter')
            }
        },
        back() {
            if (this.step == 1) {
                this.$router.go(-1)
            } else if(this.step == 4) {
                this.$router.push('userCenter')
            } else {
                this.step--;
            }
        },
        upload() {
            window.JSDK.uploadImg({}, data => {
                this.bizlicenseImg = data.filePath;
            })
        }
    },
    created() {
        this.step = this.$route.query.step === 'last' ? 4 : 1;
    }
}
</script>
