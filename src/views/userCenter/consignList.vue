<template>
    <div class="wrapper">
        <app-header :title="consign.title"></app-header>
        <div class="main">
            <mt-navbar v-model="selected" style="margin-bottom:10px;">
                <mt-tab-item id="1">处理中</mt-tab-item>
                <mt-tab-item id="2">已反馈</mt-tab-item>
            </mt-navbar>

            <div class="order-item" v-for="order in list">
                <app-cell>
                    <div class="gray">单号 : {{order.applyNo}}</div>
                    <app-button size="tiny">{{selected == 1 ? '处理中' : '已反馈'}}</app-button>
                </app-cell>
                <app-cell>
                    <div class="location">
                        <span>{{order.fromPlace}}</span>
                        <img src="./images/arrow.png" alt="">
                        <span>{{order.toPlace}}</span>
                    </div>
                    <div class="gray">{{new Date(order.sendDate).Format('yyyy-MM-dd')}}</div>
                </app-cell>
                <app-cell align="top">
                    <div class="gray">
                        <div>货物名称:{{order.productsName}}</div>
                    </div>
                    <div @click="handleClick(order)">查看详情 &gt;</div>
                </app-cell>
            </div>
            <app-no-data v-if="!list.length"></app-no-data>      
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.order-item{
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;

    &-ft{
        padding-top: 10px;
        border-top: 1px dashed $grayColor;
        text-align: right;
        margin-top: 5px;
    }

    .cell{
        padding: 5px 0;
    }
}
.location{
    font-size: 20px;
    color: #535353;

    img{
        margin: 0 5px;
        width: 40px;
    }
}
.mint-popup-right{
    width: 80%;
    height: 100%;
    background-color: #fff;
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appCell from '@/components/cell'
import appButton from '@/components/button'
import appIcon from '@/components/icon'
import appNoData from '@/components/nodata'
import orderHead from '@/components/orderHead'
import { Navbar, TabItem, Popup } from 'mint-ui'
import { FOLLOWUP_STATE } from '@/utils/constant'

export default {
    components: {
        appHeader,
        appFooter,
        appCell,
        [Navbar.name]:Navbar,
        [TabItem.name]:TabItem,
        [Popup.name]:Popup,
        appButton,
        appIcon,
        appNoData,
        orderHead
    },
    data() {
        return {
            status: 1,
            selected: '1',
            list: [],
            popupVisible: false,
            order: {},
            consign: {},
            FOLLOWUP_STATE
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'TCSA01',
                funType: 'findAll',
                applyUserId: this.$store.state.user.userInfo.userId || '1',
                sourceType: this.type,
                feedbackStatus: this.selected,
                pageCount: 1000,
                currentPageNum: 1
            }).then(data => {
                this.list = data.consignApplyList || [];
            })
        },
        handleClick(order) {
            this.$store.commit('setConsignApplyOrder',order);
            this.$router.push({
                name: 'consignDetail',
                params: { type: this.type}
            })
        }
    },
    created() {
        this.type = this.$route.query.type || '1';
        if (this.type == 1) {
            this.consign = {
                title: '运价查询单',
                state1: '询价中',
                state2: '已反馈'
            }
        } else {
            this.consign = {
                title: '我的托运单',
                state1: '处理中',
                state2: '已反馈'
            }
        }
        this.fetchData();
    },
    watch: {
        selected() {
            this.fetchData();
        }
    }
}
</script>
