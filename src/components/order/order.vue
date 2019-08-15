<template>
    <div class="order-item">
        <div @click="handleClick('orderDetail')">
            <app-cell>
                <div class="gray fs12">订单号: {{order.orderNo}}</div>
                <app-button size="tiny">{{ORDER_STATE[order.orderState]}}</app-button>
            </app-cell>
            <app-cell>
                <div class="location">
                    <span>{{order.originatingPlace}}</span>
                    <img src="./arrow.png" alt="">
                    <span>{{order.destination}}</span>
                </div>
                <div class="gray">{{new Date(order.orderTime).Format('yyyy-MM-dd hh:mm:ss')}}</div>
            </app-cell>
            <app-cell align="top">
                <div class="gray fs12" style="line-height:20px;">
                    <div>货物名称: {{order.goodsName}}</div>
                    <div>货物重量: {{order.goodsWeight}}吨</div>
                    <div>运输方式: {{TRANS_TYPE[order.transType]}}</div>
                </div>
                <div class="themeColor" style="font-size:16px;">{{order.paymentState}}</div>
            </app-cell>
        </div>
        <div class="order-item-ft">
            <app-button size="small" type="default" round plain @click="handleClick('logistic')">
                物流跟踪
            </app-button>
            <app-button size="small" type="default" round plain @click="handleClick('gathering')">
                付款情况
            </app-button>
            <app-button size="small" type="default" round plain @click="handleClick('otherService')">
                相关服务
            </app-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.order-item{
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    display: block;

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
</style>

<script>
import appCell from '@/components/cell'
import appButton from '@/components/button'
import appIcon from '@/components/icon'
import { ORDER_STATE, PAY_STATE, TRANS_TYPE } from '@/utils/constant'
export default {
    props:{
        order: Object
    },
    components: {
        appCell,
        appButton,
        appIcon
    },
    data() {
        return {
            ORDER_STATE,
            PAY_STATE,
            TRANS_TYPE
        }
    },
    methods: {
        handleClick(route) {
            this.$store.commit('setOrderInfo',this.order);
            this.$router.push({
                name: route,
                query: {
                    id: this.order.orderId
                }
            });
        }
    }
}
</script>
