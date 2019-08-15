<template>
    <div class="wrapper">
        <app-header title="员工管理">
            <div slot="right" @click="addStaff">添加</div>
        </app-header>
        <div class="main">
            <div class="card" v-for="item in staffList">
                <app-cell class="gray">
                    <div>
                        <app-icon class="icon-myfill" size="medium"></app-icon>
                        <span>{{item.name}}</span>
                    </div>
                    <app-button size="tiny" type="success">{{item.state}}</app-button>
                </app-cell>
                <app-cell class="gray">
                    <div>
                        <app-icon class="icon-mobile" size="large"></app-icon>
                        <span>{{item.mobile}}</span>
                    </div>
                    <div>{{item.staff}}</div>
                </app-cell>
                <div class="ft">
                    <app-button size="small">修改</app-button>
                </div>
            </div>
            <mt-popup
            v-model="popupVisible"
            position="right"
            class="popup-right">
                <div class="wrapper">
                    <app-header title="添加员工">
                        <div slot="right" @click="save">保存</div>
                    </app-header>
                    <div class="main">
                        <div class="form">
                            <form-item>
                                <label>真实姓名</label>
                                <input type="text" v-model="name">
                            </form-item>
                            <form-item>
                                <label>员工用户名</label>
                                <input type="text" v-model="username">
                            </form-item>
                            <form-item>
                                <label>手机号</label>
                                <input type="text" v-model="mobile">
                            </form-item>
                        </div>
                    </div>
                </div>
            </mt-popup>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.card{
    background-color: #fff;
    margin-top: 10px;
    padding-top: 10px;
    .cell{
        padding: 0 10px;
    }
    .ft{
        border-top: 1px solid $grayColor;
        padding: 10px;
        text-align: right;
    }
}
.popup-right{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.form{
    margin: 0 10%;
}
</style>

<script>
import appHeader from '@/components/header'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import appButton from '@/components/button'
import formItem from '@/components/form'
import { Popup } from 'mint-ui'

export default {
    components: {
        appHeader,
        appIcon,
        appCell,
        appButton,
        formItem,
        [Popup.name]: Popup
    },
    data() {
        return {
            staffList: [
                {
                    name: 'xx',
                    mobile: '18734826752',
                    state: '正常',
                    staff: '@xx'
                }
            ],
            name: '',
            mobile: '',
            username: '',
            popupVisible: false
        }
    },
    created() {
        const userInfo = this.$store.state.user.userInfo;
        this.username = userInfo.userName;
    },
    methods: {
        addStaff() {
            this.popupVisible = true;          
        },
        save() {
            this.popupVisible = false;   
        }
    }
}
</script>
