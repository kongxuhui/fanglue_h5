<template>
    <div class="wrapper">
        <app-header title="个人认证">
            <app-icon type="icon-back" @click.native="back" slot="left"></app-icon>
        </app-header>
        <div class="main bg-white">
            <app-logo v-if="step !== 3"/>
            <div class="form" v-if="step === 1">
                <form-item>
                    <label>真实姓名</label>
                    <input type="text" v-model="name">
                </form-item>
                 <form-item>
                    <label>身份证号</label>
                    <input type="text" v-model="idcard">
                </form-item>
                 <form-item>
                    <label>证件有效期</label>
                    <div style="flex:1;padding:5px 0px 5px 10px;height:30px;" @click="openPicker('start')">{{startDate}}</div>
                    <div>至</div>
                    <div style="flex:1;padding:5px 0px 5px 10px;height:30px;" @click="openPicker('end')">{{endDate}}</div>
                    <checkbox v-model="checked"/>长期                
                </form-item>
                <app-button @click="handleClick(1)" style="margin-top:30px;">下一步</app-button>
            </div>
            <div class="form" v-else-if="step === 2">
                <div class="flex">
                    <div class="flex-item" style="padding-right:10px;" @click="upload1">
                        <img src="../../assets/images/front.jpg" alt="">
                        <div>点击上传正面</div>
                    </div>
                    <div class="flex-item" style="padding-left:10px;" @click="upload2">
                        <img src="../../assets/images/back.jpg" alt="">
                        <div>点击上传反面</div>
                    </div>
                </div>
                <app-button @click="handleClick(2)" style="margin-top:30px;">提交审核</app-button>
            </div>
            <div class="form" v-else>
                <app-cell justify="center" style="margin-top:30px;">
                    <app-icon class="icon-info" type="selected" style="margin-right:3px;font-size:30px;"/>
                    <div>您的资料已提交成功</div>
                </app-cell>
                <div class="gray">* 预计1~3个工作日内审核完毕，审核结果会发送到您注册时的手机上。</div>
                <app-button @click="handleClick(3)" style="margin-top:30px;">返回</app-button>
            </div>
        </div>
        <mt-datetime-picker
            ref="startPicker"
            v-model="startDateVisible"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="start"
            :endDate="new Date()"
            @confirm="handleConfirm">
        </mt-datetime-picker>

        <mt-datetime-picker
            ref="endPicker"
            v-model="endDateVisible"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)"
            :endDate="end"
            @confirm="handleConfirm2">
        </mt-datetime-picker>
    </div>
</template>

<style scoped>
.flex-item{
    text-align: center;
}
</style>


<script>
import appHeader from '@/components/header'
import appLogo from '@/components/logo'
import appButton from '@/components/button'
import appCaptcha from '@/components/captcha'
import formItem from '@/components/form'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import checkbox from '@/components/form/checkbox'
import { formMixin, captchaMinxin } from '@/mixins/mixins'
import { DatetimePicker,Toast } from 'mint-ui'

export default {
    components: {
        appHeader,
        appLogo,
        appButton,
        appCaptcha,
        formItem,
        appIcon,
        appCell,
        checkbox,
        [DatetimePicker.name]: DatetimePicker
    },
    mixins: [formMixin,captchaMinxin],
    data() {
        return {
            step: 1,
            cardImgUpUrl: 'http://192.168.139.202:2222/www/contract/1/2018/04/09/096956/1523266423724.png',
            cardImgDownUrl: 'http://192.168.139.202:2222/www/contract/1/2018/04/09/096956/1523266423724.png',
            rules: {
                idcard: [
                    { required: true, message: '请输入正确的身份证号', type: 'idCard' }
                ],
                startDate : [
                    { required: true, message: '请输入证件开始有效期' }
                ],
                // endDate : [
                //     { required: true, message: '请输入证件结束有效期' }
                // ]
            },
            stepRules: {
                cardImgUpUrl: [
                    { required: true, message: '请上传身份证正面照' },
                ],
                cardImgDownUrl: [
                    { required: true, message: '请上传身份证反面照' }
                ]
            },
            name: '',
            idcard: '',
            startDateVisible: false,
            endDateVisible: false,
            start: new Date(new Date().getFullYear() - 20, 0, 1),
            end: new Date(new Date().getFullYear() + 20, 0, 1),
            startDate: '',
            endDate:'',
            checked: false
        }
    },
    methods: {
        openPicker(type) {
            if (type === 'start') {
                this.$refs.startPicker.open();
            } else {
                !this.checked && this.$refs.endPicker.open();
            }
        },
        step2() {
            this.$http.post({
                transCode: 'MCER01',
                funType: 'findAll',
                cardNo: this.idcard,
                noAuditStatus: 3
            }).then(data => {
                if (data.totalCount == 0) {
                    this.step = 2
                } else {
                    Toast('此身份证号已认证或已提交认证申请，请核实！')
                }
            })
        },
        handleClick(step) {
            if (step === 1) {
                if (/^[\u4E00-\u9FA5]{2,10}$/.test(this.name)) {
                    if (this.validate()) {
                        if (this.endDate) {
                            this.step2()
                        } else {
                            if (this.checked) {
                                this.step2()
                            } else {
                                Toast('请输入证件结束有效期')
                            }
                        }
                    }
                } else {
                    Toast('请输入正确的真实姓名')
                }
                
            } else if (step === 2) {
                if (this.validate(this.stepRules)) {
                    this.$http.post({
                        transCode: 'MCER01',
                        funType: 'add',
                        userId: this.userId,
                        userName: this.userName,
                        applyType: '1',
                        realName: this.name,
                        cardNo: this.idcard,
                        cardValidEnd: this.endDate,
                        cardValidStart: this.startDate,
                        cardImgUpUrl: this.cardImgUpUrl,
                        cardImgDownUrl: this.cardImgDownUrl,
                        longTerm: this.checked ? 1 : 2
                    }).then(data => {
                        if (data.code === '000000') {
                            this.step = 3;
                        } else {
                            Toast(data.message);
                        }
                    })
                }                
            } else {
                this.$router.push('userCenter')
            }
        },
        handleConfirm(date) {
            let month = date.getMonth() + 1;
            let day =  date.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            this.startDate = date.getFullYear() + '-' + month + '-' + day;
        },
        handleConfirm2(date) {
            let month = date.getMonth() + 1;
            let day =  date.getDate();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            this.tempDate = this.endDate = date.getFullYear() + '-' + month + '-' + day; 
        },
        back() {
            if (this.step == 1) {
                this.$router.go(-1)
            } else if(this.step == 2) {
                this.step = 1;
            } else {
                this.$router.push('userCenter')
            }
        },
        upload1() {
            let flag='up';
            let uploadType='certification';
            window.JSDK.uploadFile({flag,uploadType});
        },
        upload2() {
            let flag='down';
            let uploadType='certification';
            window.JSDK.uploadFile({flag,uploadType});
        }
    },
    created() {
        let userInfo = this.$store.state.user.userInfo;
        this.userId = userInfo.userId;
        this.userName = userInfo.userName;
        this.step = this.$route.query.step === 'last' ? 3 : 1;
    },
    watch: {
        checked() {
            if (this.checked) {
                this.endDate = '';
            } else {
                this.endDate = this.tempDate || '';
            }
        }
    }
}
</script>
