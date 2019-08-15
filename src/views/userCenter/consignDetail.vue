<template>
    <div class="wrapper">
        <app-header :title="consign.title"></app-header>
        <div class="main" v-if="order">
            <app-cell border>
                <div class="gray">单号 : {{order.applyNo}}</div>
                <app-button size="tiny">{{order.applyStatus == 1 ? '处理中' : '已反馈'}}</app-button>
                <div slot="desc">申请时间：{{new Date(order.applyTime).Format('yyyy-MM-dd hh:mm:ss')}}</div>
            </app-cell>
            <app-cell>
                <div>发货地</div>
                <div>{{order.fromPlace}}</div>
            </app-cell>
            <app-cell>
                <div>到达地</div>
                <div>{{order.toPlace}}</div>
            </app-cell>
            <app-cell>
                <div>货物重量</div>
                <div>{{order.productsWeight}}吨</div>
            </app-cell>
            <app-cell>
                <div>货物体积</div>
                <div>{{order.productsVolume}}m³</div>
            </app-cell>
            <app-cell>
                <div>预计发货日期</div>
                <div>{{order.sendDateStr}}</div>
            </app-cell>
            <app-cell>
                <div>联系人</div>
                <div>{{order.contacts}}</div>
            </app-cell>
            <app-cell>
                <div>联系电话</div>
                <div>{{order.contactTel}}</div>
            </app-cell>
            <app-cell>
                <div style="width: 80px;flex-shrink: 0;">反馈信息</div>
                <div>{{order.applyFeedback}}</div>
            </app-cell>
            <!-- <app-cell>
                <div>反馈时间</div>
                <div>{{order.contactTel}}</div>
            </app-cell> -->
            <app-cell>
                <div>反馈人</div>
                <div>{{order.feedbackUser}}</div>
            </app-cell>
            <!-- <app-cell>
                <div>跟进状态</div>
                <div>{{FOLLOWUP_STATE[order.followupStatus]}}</div>
            </app-cell>
            <app-cell>
                <div>跟进信息</div>
                <div>{{order.followupMessage}}</div>
            </app-cell>
            <app-cell>
                <div>跟进人</div>
                <div>{{order.followupUser}}</div>
            </app-cell>         -->
        </div>
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
    font-size: 18px;
}
.mint-popup-right{
    width: 80%;
    height: 100%;
    background-color: #fff;
}
</style>

<script>
import appHeader from '@/components/header'
import appCell from '@/components/cell'
import appButton from '@/components/button'
import appIcon from '@/components/icon'
import appNoData from '@/components/nodata'
import orderHead from '@/components/orderHead'
import { APPLY_STATE, FOLLOWUP_STATE } from '@/utils/constant'

export default {
    components: {
        appHeader,
        appCell,
        appButton,
        appIcon,
        appNoData,
        orderHead
    },
    data() {
        return {
            order: null,
            consign: {},
            APPLY_STATE,
            FOLLOWUP_STATE
        }
    },
    methods: {
        
    },
    created() {
        this.type = this.$route.params.type || '1';
        if (this.type == 1) {
            this.consign = {
                title: '运价单详情'
            }
        } else {
            this.consign = {
                title: '托运申请详情'
            }
        }
        this.order = this.$store.state.consign.consignApplyOrder;
    }
}
</script>
