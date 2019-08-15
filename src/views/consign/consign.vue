<template>
    <div class="wrapper">
        <app-header :title="title"></app-header>
        <div class="main">
            <div v-if="step === 1">
                <div class="consign-address">
                    <app-icon class="icon-send" style="color:#fff;"></app-icon>
                    <div class="consign-address-item">
                        <app-icon class="icon-qidian" style="color:#09BAB4;font-size:30px;line-height:30px;"></app-icon>
                        <!-- <div class="address">{{startPoint || '临汾'}}</div> -->
                        <form-item class="item">
                            <input type="text" placeholder="请输入发货地" v-model="startPoint">
                        </form-item>
                    </div>
                    <div class="consign-address-item">
                        <app-icon class="icon-zhongdian" style="color:#F0A308;font-size:30px;line-height:30px;"></app-icon>
                        <!-- <div class="address">{{endPoint || '临汾'}}</div> -->
                        <form-item class="item">
                            <input type="text" placeholder="请输入收货地" v-model="endPoint">
                        </form-item>
                    </div>
                </div>
                <div class="consign-box">
                    <form-item class="item">
                        <app-icon class="icon-cube" size="large" type="selected"></app-icon>
                        <input type="text" placeholder="请输入货物名" v-model="name">
                    </form-item>
                    <form-item class="item">
                        <app-icon class="icon-clock" size="large" type="selected"></app-icon>
                        <div @click="openPicker" style="padding:0 10px;" :style="{color: date?'inherit':'#d9d7d9'}">{{date || '请输入发货时间'}}</div>
                        <!-- <input type="text" placeholder="请输入发货时间" v-model="date" > -->
                    </form-item>
                </div>
                <div class="consign-box">
                    <div class="item">
                        <div class="name">货物重量</div>
                        <input type="number" class="consign-box-input" v-model="weight">
                        <span>吨</span>
                    </div>
                    <div class="item">
                        <div class="name">货物体积</div>
                        <input type="number" class="consign-box-input" v-model="volume">
                        <span>m³</span>
                    </div>
                </div>

                <div class="bg-white" style="padding:10px">
                    <form-item class="item">
                        <label>联系人</label>
                        <input type="text" placeholder="请输入联系人" v-model="contacts">
                    </form-item>
                    <form-item class="item">
                        <label>联系电话</label>
                        <input type="number" placeholder="请输入联系电话" v-model="contactsTel" @focus="intoView">
                    </form-item>
                </div>
            </div>

            <div class="bg-white" v-else style="padding:30px 0;">
                <div class="form">
                    <app-cell justify="center">
                        <app-icon class="icon-info" type="selected" style="margin-right:3px;font-size:40px;"/>
                        <div>您的资料已提交成功</div>
                    </app-cell>
                    <div class="gray">* 资料提交后将会有专业业务人员和您联系，请您耐心等待。</div>
                    <app-button @click="handleBack()" style="margin-top:30px;">返回首页</app-button>
                </div>
            </div>
            <mt-datetime-picker
                ref="picker"
                v-model="pickerVisible"
                type="date"
                :startDate="new Date()"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm">
            </mt-datetime-picker>
        </div>
        <app-button v-if="step === 1" type="primary" bottom @click="handleClick">{{btn}}</app-button>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
::-webkit-input-placeholder { /* WebKit browsers */
    color:#d9d7d9;
}
.consign-address{
    display: flex;
    text-align: center;
    background-color: $themeColor;
    position: relative;

    .icon-send{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &-item{
        flex: 1;
    }
    .item{
        border-bottom: none;
    }
    .address{
        color: #fff;
        font-size: 20px;
    }
    input{
        text-align: center;
        background-color: transparent;
        color: #fff;
    }
}
.consign-box{
    display: flex;
    background-color: #fff;
    padding: 20px 10px;
    text-align: center;
    margin-bottom: 10px;

    .item{
        flex: 1;
        border: none;
        padding: 0 10px;
    }
    .item + .item{
        border-left: 1px solid $grayColor;
    }
    .name {
        margin-bottom: 5px;
        margin-left: -20px;
    }
    &-input{
        width: 60px;
        height: 26px;
        padding: 5px;
        border: 1px solid $grayColor;
        margin-right: 10px;
    }
    & + &{
        border-top: 1px solid $grayColor;
    }
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appIcon from '@/components/icon'
import appButton from '@/components/button'
import appCell from '@/components/cell'
import formItem from '@/components/form'
import { DatetimePicker, Toast } from 'mint-ui'
import { formMixin } from '@/mixins/mixins'

export default {
    components: {
        appHeader,
        appFooter,
        appIcon,
        appButton,
        formItem,
        appCell,
        [DatetimePicker.name]: DatetimePicker
    },
    mixins: [formMixin],
    data() {
        return {
            name: '',
            date: '',
            title: '',
            btn: '',
            pickerVisible: false,
            contactsTel: '',
            startPoint: '',
            endPoint: '',
            type: '',
            weight: '',
            volume: '',
            contacts: '',
            step: 1,
            rules: {
                startPoint: [
                    { required: true, message: '请输入发货地' }
                ],
                endPoint: [
                    { required: true, message: '请输入收货地' }
                ],
                name: [
                    { required: true, message: '请输入货物名' }
                ],
                date: [
                    { required: true, message: '请输入发货时间' }
                ],
                weight: [
                    { required: true, message: '请输入货物重量' }
                ],
                contacts: [
                    { required: true, message: '请输入联系人' }
                ]              
            }
        }
    },
    created() {
        this.type = this.$route.query.type;
        if (this.type === 'query') {
            this.title = '运价查询';
            this.btn = '发布运价查询';
        } else {
            this.title = '我要托运';
            this.btn = '发布托运需求';
        }
        this.userId = this.$store.state.user.userInfo.userId;
        let consignInfo = this.$store.state.consign.consignInfo;
        if (consignInfo && consignInfo.type === this.type) {
            this.startPoint = consignInfo.fromPlace;
            this.endPoint = consignInfo.toPlace;
            this.name = consignInfo.productsName;
            this.weight = consignInfo.productsWeight;
            this.volume = consignInfo.productsVolume;
            this.date = consignInfo.sendDateStr;
            this.contacts = consignInfo.contacts;
            this.contactsTel = consignInfo.contactTel;
        }
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();
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
            this.date = date.getFullYear() + '-' + month + '-' + day;
        },
        handleClick() {
            if (this.validate()) {
                if (/^((\d{3,4}\-?\d{7,8})|(1[3584]\d{9}))$/.test(this.contactsTel)) {
                    if (this.userId) {
                        this.$http.post({
                            transCode: 'TCSA01',
                            funType: 'add',
                            applyUserId: this.userId,
                            custName: this.$store.state.user.userInfo.userName,
                            fromPlace: this.startPoint,
                            toPlace: this.endPoint,
                            productsName: this.name,
                            productsWeight: this.weight,
                            productsVolume: this.volume,
                            sendDateStr: this.date,
                            contacts: this.contacts,
                            contactTel: this.contactsTel,
                            sourceType: this.type === 'query' ? 1 : 2,
                            bizInfoId: this.$store.state.user.userInfo.employee && this.$store.state.user.userInfo.employee.ownedMerchant || ''
                        }).then(data => {
                            if (data.code === '000000') {
                                this.step = 2;
                                this.$store.commit('setConsignInfo', null)
                            } else {
                                Toast(data.message);
                            }
                        })
                    } else {
                        this.$store.commit('setConsignInfo', {
                            fromPlace: this.startPoint,
                            toPlace: this.endPoint,
                            productsName: this.name,
                            productsWeight: this.weight,
                            productsVolume: this.volume,
                            sendDateStr: this.date,
                            contacts: this.contacts,
                            contactTel: this.contactsTel,
                            type: this.type
                        })
                        this.$router.push({
                            name: 'login',
                            query: {
                                redirect:  this.$route.fullPath
                            }
                        })
                    }   
                } else {
                    Toast('请输入正确的联系电话')
                }                          
            }
        },
        handleBack() {
            this.$router.push('home')
        },
        intoView(event) {
            window.addEventListener('resize',function(){
                event.target.scrollIntoView()
            });
        }
    }
}
</script>
