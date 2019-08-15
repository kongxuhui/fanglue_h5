<template>
    <div class="wrapper">
        <app-header title="物流详情"></app-header>
        <div class="main">
            <orderHead :order="order">
                <div class="themeColor" @click="handleClick">查看分运计划 &gt;</div>
            </orderHead>
            <div class="step-box" v-if="detailList.length">
                <div class="step" v-for="item in detailList">
                    <app-cell>
                        <div class="hd">
                            {{item.transportOption+' '}}
                            <span v-if="item.departurePlace">{{item.departurePlace +'到'+item.destination+' '}}</span>
                            {{item.transportStatusStr}}
                        </div>
                        <!-- <div class="hd" v-else>{{item.transportOption}}</div> -->
                        <div class="gray">{{item.transportTimeStr}}</div>
                    </app-cell>
                    <div class="bd">
                        当前位置：{{item.currentAddr}}
                        <span style="margin-left:5px;" v-if="item.exceptionRemark">{{'【异常事项】'+item.exceptionRemark}}</span>
                    </div>
                </div>
            </div>

            <app-no-data v-else>暂无物流信息</app-no-data>
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
    padding-bottom: 15px;
    &::before{
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: currentColor;
        transform: translateX(-50%);
        z-index: 10;
    }
    &:first-child{
        color: $themeColor;
    }
    .gray,
    .hd,
    .bd{
        color: inherit;
    }
    .cell{
        padding: 0;
        padding-left: 10px;
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
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
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
            detailList: [],
            orderId: '',
            order: null
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'OORD01',
                funType: 'findDetailAll',
                id: this.orderId
            }).then(data => {
                this.detailList = data.transportplanRecordList || [];
                this.order = data.order;
            })
        },
        handleClick() {
            this.$store.commit('setOrderInfo',this.order);
            this.$router.push('carryPlan');
        }
    },
    created() {
        this.orderId = this.$route.query.id;
        this.fetchData();
    }
}
</script>
