<template>
    <div class="wrapper">
        <app-header title="付款详情"></app-header>
        <div class="main">
            <orderHead :order="order" v-if="order" style="margin-bottom:0;">
                <div>接单员 : {{order.individualMember}}</div>
            </orderHead>
            <div class="box" v-if="order">
                <app-cell class="bdt">
                    <div>应付总额：{{order.orderTotal}}元</div>
                </app-cell>
                <app-cell>
                    <div>已付总额：{{order.realAmount}}元</div>
                    <div>{{order.paymentState}}</div>
                </app-cell>
            </div>
            
            <app-cell border v-for="(item, index) in receivablesList" :key="index">
                <div>{{item.roption}}</div>
                <div>{{item.money}}元</div>
                <div slot="desc">预计付款日期：{{item.planPayTimeStr}}</div>
            </app-cell>
            
            <app-no-data v-if="!receivablesList.length">暂无付款信息</app-no-data>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.box {
    background-color: #fff;
    margin-bottom: 10px;
    .cell{
        padding: 5px 10px;
    }
}
.bdt{
    border-top: 1px solid $grayColor;
}
.step-box{
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
}
.step {
    position: relative;
    border-left: 1px dashed currentColor;
    color:#888888;
    padding-bottom: 10px;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: currentColor;
        transform: translateX(-50%);
    }
    &:first-child{
        color: $themeColor;
    }
    .gray,
    .hd,
    .bd{
        color: inherit;
    }
}
.hd{
    font-size: 16px;
    color: #666;
}
.bd{
    padding: 0 10px;
}
.location{
    font-size: 20px;
}
</style>

<script>
import appHeader from '@/components/header'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import appNoData from '@/components/nodata'
import orderHead from '@/components/orderHead'
import { LOGISTICS_STATE, PAY_STATE, TRANS_TYPE } from '@/utils/constant'

export default {
    components: {
        appHeader,
        appCell,
        appIcon,
        appNoData,
        orderHead
    },
    data() {
        return {
            status: 1,
            selected: '1',
            LOGISTICS_STATE, 
            PAY_STATE, 
            TRANS_TYPE,
            order: null,
            orderId: '',
            receivablesList: []
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'OORD01',
                funType: 'findDetailAll',
                id: this.orderId
            }).then(data => {
                this.order = data.order;
                this.receivablesList = data.receivablesDtlList || [];
            })
        },
    },
    created() {
        this.orderId = this.$route.query.id;
        this.fetchData();
    }
}
</script>
