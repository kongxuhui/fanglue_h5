<template>
    <div class="box" v-if="order" style="margin-top:10px;">
        <app-cell>
            <div class="gray">订单号 : {{order.orderNo}}</div>
            <slot name="top"></slot>
        </app-cell>
        <app-cell>
            <div class="location">
                <span>{{order.originatingPlace}}</span>
                <img src="./arrow.png" alt="">
                <span>{{order.destination}}</span>
            </div>
            <div class="gray">{{new Date(order.orderTime).Format('yyyy-MM-dd hh:mm:ss')}}</div>
        </app-cell>
        <app-cell>
            <div class="gray">货物名称 : {{order.goodsName}}</div>
            <slot></slot>
        </app-cell>
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
            
        }
    }
}
</script>
