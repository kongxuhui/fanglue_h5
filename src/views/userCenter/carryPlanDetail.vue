<template>
    <div class="wrapper">
        <app-header title="分运计划详情"></app-header>
        <div class="main">
            <orderHead :order="order">
                <router-link :to="{name:'logistic',query:{id:order.orderId}}" class="themeColor">查看物流详情 &gt;</router-link>
            </orderHead>
            <div class="box">
                <app-cell class="hd">
                    <div>{{carry.transNUM+' '+carry.transStateStr}}</div>
                    <div style="margin-right:5px;">{{carry.departurePlace}} 到 {{carry.destination}}</div>
                    <div slot="desc">预计到达日期：{{carry.planArrivalDateStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">运输方式</div>
                    <div>{{carry.shippingType}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">出发地</div>
                    <div>{{carry.departurePlace}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">计划发出日期</div>
                    <div>{{carry.planSendDateStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">到达地</div>
                    <div>{{carry.destination}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">预计到达日期</div>
                    <div>{{carry.planArrivalDateStr}}</div>
                </app-cell>
                 <app-cell>
                    <div class="gray">班次名</div>
                    <div>{{carry.flightsOrTrain}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">运输数量</div>
                    <div>{{carry.transQuantity}}</div>
                </app-cell>
                <!-- <app-cell>
                    <div class="gray">承运方</div>
                    <div>{{carry.carrier}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">联系人</div>
                    <div>{{carry.carrierContacts}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">联系电话</div>
                    <div>{{carry.carrierTel}}</div>
                </app-cell> -->
                <app-cell>
                    <div class="gray">提单号</div>
                    <div>{{carry.ordinalNO}}</div>
                </app-cell>
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.box{
    background-color: #fff;
    margin-bottom: 10px;

    .cell{
        padding: 5px 10px;
    }

    .hd{
        padding: 10px;
        border-bottom: 1px solid $grayColor;
        font-size: 16px;
    }
}

.location{
    font-size: 20px;
}
</style>

<script>
import appHeader from '@/components/header'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import orderHead from '@/components/orderHead'

export default {
    components: {
        appHeader,
        appCell,
        appIcon,
        orderHead
    },
    data() {
        return {
            order: null,
            carry: null,
        }
    },
    methods: {
        
    },
    created() {
        this.order = this.$store.state.order.orderInfo;
        this.carry = this.$store.state.order.carryInfo;
    }
}
</script>
