<template>
    <div class="wrapper">
        <app-header title="合同详情"></app-header>
        <div class="main">
            <orderHead :order="order" v-if="order">
                <router-link :to="{name:'orderDetail',query:{id:order.orderId}}" class="themeColor">查看订单详情 &gt;</router-link>
            </orderHead>
            <div class="box" v-if="contract">
                <div class="hd">
                    合同信息
                    <span class="right">{{contract.contractStateStr}}</span>
                </div>
                
                <app-cell>
                    <div class="gray">合同编号</div>
                    <div>{{contract.contractNO}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">合同标题</div>
                    <div>{{contract.contractTitle}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">客户名</div>
                    <div>{{contract.customer}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">组织类型</div>
                    <div>{{ORGANIZ_TYPE[contract.contractState]}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">合同金额</div>
                    <div>{{contract.contractPrice}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">签约日期</div>
                    <div>{{contract.signingDateStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">履行开始日期</div>
                    <div>{{contract.startDateStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">履行结束日期</div>
                    <div>{{contract.endDateStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">付款方式</div>
                    <div>{{PAYMENT[contract.contractState]}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">负责员工</div>
                    <div>{{contract.personLiable}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">备注</div>
                    <div>{{contract.remarks}}</div>
                </app-cell>
            </div> 
            <app-no-data v-else></app-no-data> 
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
        position: relative;
        .right{
            position: absolute;
            right: 10px;
            font-size: 14px;
        }
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
import appNoData from '@/components/nodata'
import orderHead from '@/components/orderHead'
import { PAYMENT, ORGANIZ_TYPE } from '@/utils/constant'

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
            orderId: '',
            contract: null,
            PAYMENT,
            ORGANIZ_TYPE,
            order: null
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'OCON01',
                funType: 'findDetail',
                id: this.contractId
            }).then(data => {
                this.contract = data.contract || null;
            })
        },
    },
    created() {
        this.order = this.$store.state.order.orderInfo;
        this.contractId = this.$route.query.id;
        this.fetchData();
    }
}
</script>
