<template>
    <div class="wrapper">
        <app-header title="分运计划"></app-header>
        <div class="main">
            <orderHead :order="order">
                <router-link :to="{name:'logistic',query:{id:order.orderId}}" class="themeColor">查看物流详情 &gt;</router-link>
            </orderHead>
            
            <app-cell v-for="(item,index) in detailList" :key="index" border arrow @click.native="handleClick(item)">
                <div>{{item.transNUM+' '}} <span class="themeColor">{{item.transStateStr}}</span></div>
                <div style="margin-right:5px;">{{item.departurePlace}} 到 {{item.destination}}</div>
                <div slot="desc">预计到达日期：{{item.planArrivalDateStr}}</div>
            </app-cell>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.box {
    .cell{
        padding: 5px 10px;
    }
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
            detailList: [],
            orderId: '',
            order: null
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'TTSP02',
                funType: 'findAll',
                orderId: this.orderId
            }).then(data => {
                this.detailList = data.transportplanDtlList || [];
            })
        },
        handleClick(item) {
            this.$store.commit('setCarryInfo',item);
            this.$router.push('carryPlanDetail');
        }
    },
    created() {
        this.order = this.$store.state.order.orderInfo;
        this.orderId = this.order.orderId;
        this.fetchData();
    }
}
</script>
