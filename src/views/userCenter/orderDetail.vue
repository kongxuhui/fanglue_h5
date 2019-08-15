<template>
    <div class="wrapper">
        <app-header title="订单详情"></app-header>
        <div class="main" v-if="order">
            <orderHead :order="order">
                <router-link :to="{name:'contractDetail',query:{id:order.correspondingContract}}" class="themeColor">查看合同详情 &gt;</router-link>
            </orderHead>

            <div class="box">
                <div class="hd">订单信息</div>
                <app-cell>
                    <div class="gray">托运方</div>
                    <div>{{order.shipper}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">接单员</div>
                    <div>{{order.individualMember}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">应收总额</div>
                    <div>{{order.orderTotal}}元</div>
                </app-cell>
                <app-cell>
                    <div class="gray">下单时间</div>
                    <div>{{order.orderTime && new Date(order.orderTime).Format('yyyy-MM-dd hh:mm:ss')}}</div>
                </app-cell>
                <!-- <app-cell>
                    <div class="gray">发货人</div>
                    <div>{{order.consignor}}</div>
                </app-cell>
                 <app-cell>
                    <div class="gray">发货人电话</div>
                    <div>{{order.consignorTel}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">物流状态</div>
                    <div>{{order.logisticsState}}</div>
                </app-cell>
                 <app-cell>
                    <div class="gray">付款状态</div>
                    <div>{{order.paymentState}}</div>
                </app-cell> -->
            </div> 

            <div class="box">
                <div class="hd">装箱信息</div>
                <app-cell>
                    <div class="gray">集装箱规格数量：</div>
                    <div>{{packinginfo.specificationsSum}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">集装箱号：</div>
                    <div>{{packinginfo.boxNoSum}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">装箱时间：</div>
                    <div>{{packinginfo.packingTimeStr}}</div>
                </app-cell>
            </div>

            <div class="box">
                <div class="hd">货物信息</div>
                <app-cell>
                    <div class="gray">货物名：</div>
                    <div>{{order.goodsName}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">货物重量：</div>
                    <div>{{order.goodsWeight}}吨</div>
                </app-cell>
                <app-cell>
                    <div class="gray">货物体积：</div>
                    <div>{{order.goodsVolume}}m³</div>
                </app-cell>
            </div>

            <div class="box">
                <div class="hd">收货方信息</div>
                <app-cell>
                    <div class="gray">联系人：</div>
                    <div>{{order.consignee}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">联系电话：</div>
                    <div>{{order.consigneeTel}}</div>
                </app-cell>
                 <app-cell>
                    <div class="gray">收货地址：</div>
                    <div>{{order.receivingAddr}}</div>
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
import { LOGISTICS_STATE, PAY_STATE, TRANS_TYPE } from '@/utils/constant'

export default {
    components: {
        appHeader,
        appCell,
        appIcon,
        orderHead
    },
    data() {
        return {
            status: 1,
            selected: '1',
            order: null,
            LOGISTICS_STATE, 
            PAY_STATE, 
            TRANS_TYPE,
            packinginfo: {}
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'OORD01',
                funType: 'findDetail',
                id: this.orderId
            }).then(data => {
                this.order = data.order || null;
                this.packinginfo = data.packinginfo || null;
            })
        },
    },
    created() {
        this.orderId = this.$route.query.id;
        this.fetchData();
    }
}
</script>
