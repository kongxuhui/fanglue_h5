<template>
    <div class="wrapper">
        <app-header title="个人资料"></app-header>
        <div class="main bg-white">
            <div style="padding:0 10px;">
                <form-item>
                    <div class="left">昵称</div>
                    <input type="text" v-model="nickName">
                </form-item>
                <app-cell border style="padding:10px 0;" justify="left">
                    <div class="left">性别</div>
                    <div>
                        <input type="radio" v-model="sex" value="1" class="radio" name="male"> <label for="male">男</label>
                        <input type="radio" v-model="sex" value="2" class="radio" name="female"> <label for="female">女</label>
                    </div>
                </app-cell>
                <app-cell border  justify="left" style="padding:10px 0;" @click.native="openPicker">
                    <div class="left">出生日期</div>
                    <div>{{birthday}}</div>
                </app-cell>
            </div>
        </div>
        <!-- <mt-popup @click="handleClick" bottom popup-transition="popup-fade">提交</mt-popup> -->
        <app-button @click="handleClick" bottom>提交</app-button>
        <mt-datetime-picker
            ref="picker"
            v-model="pickerVisible"
            type="date"
            :startDate="new Date(new Date().getFullYear() - 50, 0, 1)"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.form-item{
    padding: 10px 0;
    input{
        padding: 0;
    }
}
.left{
    width: 70px;
    text-align: center;
    padding-right: 10px;
}
.radio{
    vertical-align: middle;
}
label{
    vertical-align: middle;
    margin-right: 10px;
}
</style>

<script>
import appHeader from '@/components/header'
import formItem from '@/components/form'
import appIcon from '@/components/icon'
import appButton from '@/components/button'
import appCell from '@/components/cell'
import { DatetimePicker, Toast ,Popup } from 'mint-ui'
import { editUserInfo } from '@/services/user'

export default {
    components: {
        appHeader,
        formItem,
        appIcon,
        appButton,
        appCell,
        [DatetimePicker.name]: DatetimePicker
    },
    // inject:['reload'],
    data() {
        return {
            nickName: '',
            sex: 1,
            birthday: '',
            pickerVisible: false
        }
    },
    methods: {
        handleClick(e) {
            if (this.nickName) {
                editUserInfo({
                    nickName: this.nickName,
                    sex: this.sex,
                    birthday: this.birthday,
                    userId: this.userId
                }).then(data => {
                    if (data.code === '000000') {
                        this.userInfo.nickName = this.nickName
                        this.userInfo.sex = this.sex
                        this.userInfo.birthday = this.birthday
                        this.$store.commit('login',this.userInfo)
                        // this.reload();
                        // window.history.go(-1) 
                        Toast({
                            message: '提交成功'
                        })
                        // this.$router.go(-1)
                        window.history.back()
                    } else {
                        Toast(data.message)
                    }
                })
            } else {
                Toast('请输入昵称')
            }
        },
        openPicker() {console.log('f')
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
            this.birthday = date.getFullYear() + '-' + month + '-' + day;
        },
    },
    created() {
        this.userInfo = this.$store.state.user.userInfo;
        this.nickName= this.userInfo.nickName;
        this.sex= this.userInfo.sex;
        this.birthday= this.userInfo.birthday;
        this.userId= this.userInfo.userId;
    }
}
</script>
