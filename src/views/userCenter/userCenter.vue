<template>
    <div class="wrapper">
        <app-header title="个人中心">
            <div slot="left"></div>
            <router-link :to="{name:'setting'}" slot="right"><app-icon class="icon-settings" /></router-link>
        </app-header>
        <div class="main">
            <div class="usercenter">
                <div class="imagebox">
                    <img :src="userImg" alt="">
                    <div class="auth">{{authState == 2 ? '已认证' : '未认证'}}</div>
                </div>
                <div>
                    <span style="font-size:14px;">{{username}}</span>
                    <router-link :to="{name:'userInfo'}">
                        <app-icon class="icon-edit1" />
                    </router-link>
                </div>
            </div>
            <app-cell border arrow>
                <div>托运订单</div>
                <router-link :to="{name: 'order'}">查看全部</router-link>
            </app-cell>
            <app-tabbar style="margin-bottom:5px;">
                <router-link :to="{name: 'order'}" class="tab-item">
                    <app-icon class="icon-order" size="large"/>
                    <div>全部</div>
                </router-link>
                <router-link :to="{name: 'order',query:{status:'1'}}" class="tab-item">
                    <app-icon class="icon-daifahuo" size="large"/>
                    <div>待运输</div>
                    <span class="num" v-if="num1">{{num1}}</span>
                </router-link>
                <router-link :to="{name: 'order',query:{status:'2'}}" class="tab-item">
                    <app-icon class="icon-deliver" size="large"/>
                    <div>运输中</div>
                    <span class="num" v-if="num2">{{num2}}</span>
                </router-link>
                <router-link :to="{name: 'order',query:{status:'3'}}" class="tab-item">
                    <app-icon class="icon-success" size="large"/>
                    <div>已收货</div>
                </router-link>
            </app-tabbar>

            <app-cell arrow border>
                <router-link class="fill" :to="{name:'consignList',query:{type:1}}">
                    <app-icon class="icon-search" type="selected" size="medium" />
                    运价查询单
                </router-link>
            </app-cell>
            <app-cell arrow gap>
                <router-link class="fill" :to="{name:'consignList',query:{type:2}}">
                    <app-icon class="icon-orders" type="selected" size="medium" />
                    托运申请单
                </router-link>
            </app-cell>

            <!-- <app-cell arrow border>
                <router-link class="fill" :to="{name:'staff'}">
                    <app-icon class="icon-users" type="selected" size="medium" />
                    员工管理
                </router-link>
            </app-cell> -->
            <!-- <app-cell arrow gap>
                <router-link class="fill" :to="{name:'login'}">
                    <app-icon class="icon-location" type="selected" size="medium" />
                    收货人管理
                </router-link>
            </app-cell> -->

            <app-cell border arrow @click.native="goAuth">
                <div>
                    <app-icon class="icon-safe" type="selected" size="medium"/>
                    实名认证
                </div>
                <div class="gray" v-if="authState == 2 && authType == 1">{{ '已认证(个人)'}}</div>
                <div class="gray" v-if="authState == 2 && authType == 2">{{ '已认证(企业)'}}</div>
            </app-cell>
            <app-cell arrow gap>
                <router-link class="fill" :to="{name:'userInfo'}">
                    <app-icon class="icon-profile" type="selected" size="medium" />
                    个人资料
                </router-link>
            </app-cell>
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';

.usercenter{
    background: url('../../assets/images/bg.jpg') center bottom $themeColor;
    background-size: cover;
    text-align: center;
    color: #fff;
    padding: 30px 0;
    margin-bottom: 5px;
    .imagebox{
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: relative;
        img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
        .auth{
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #3AE1A5;
            border-radius: 10px;
            font-size: 12px;
            padding: 0 10px;
            width: 60px;
        }
    }
}
.tab-item{
    position: relative;
    .num{
        position: absolute;
        top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: $warning;
        color: #fff;
    }
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import appTabbar from '@/components/tabbar'
import { AUTH_TYPE } from '@/utils/constant'
import imgUrl from '@/assets/images/avatar.png'

export default {
    components: {
        appHeader,
        appFooter,
        appIcon,
        appCell,
        appTabbar
    },
    data() {
        return {
            username: '',
            isAuth: false,
            AUTH_TYPE,
            userImg: '',
            auth: {},
            authType: 0,
            authState: 0,
            num1: 0,
            num2: 0
        }
    },
    created() {
        const userInfo = this.$store.state.user.userInfo;
        this.username = userInfo.nickName || userInfo.userName;
        this.userImg = userInfo.userImg || imgUrl;
        this.auth = this.$store.state.auth.authInfo || {};
        this.authType = this.auth.applyType || 0;
        this.authState = this.auth.auditStatus || 0;

        this.$http.post({
            transCode: 'MCER01',
            funType: 'findCertificationByUserId',
            userId: userInfo.userId
        }).then(data => {
            this.auth = data.certification || {};
            this.authType = this.auth.applyType || 0;
            this.authState = this.auth.auditStatus || 0;
            data.user && this.$store.commit('login',data.user);
            data.certification && this.$store.commit('setAuthInfo',data.certification);
        })

        this.$http.post({
            transCode: 'OORD01',
            funType: 'findCounts',
            userId: userInfo.userId
        },false, false).then(data => {
            this.num1 = data.count1;
            this.num2 = data.count2;
        })
    },
    methods: {
        goAuth() {
            if (this.authType == 0) {
                this.$router.push('auth');
            } else {
                if (this.auth.auditStatus == 2) {
                    this.$router.push({
                        name: 'authed',
                        query: {
                            title: this.auth.applyType == 1 ? '个人认证' : '企业认证'
                        }
                    })
                } else {
                    this.$router.push({
                        name: this.auth.applyType == 1 ? 'pAuth' : 'cAuth',
                        query: {
                            step: 'last'
                        }
                    })               
                }
            }
        }
    }
}
</script>
