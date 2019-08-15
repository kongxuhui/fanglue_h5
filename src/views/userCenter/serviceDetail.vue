<template>
    <div class="wrapper">
        <app-header title="服务记录"></app-header>
        <div class="main">
            <orderHead :order="order" v-if="order"><div>接单员: {{order.individualMember}}</div></orderHead>

            <app-cell border>                       
                <!-- <div>{{service.serviceProject + ' ' + service.serviceProcessOption}}</div>                                              -->
                <div>{{service.serviceProject}}</div>                                             
                <div class="themeColor">{{service.serviceProcessStateStr}}</div>
                <div slot="desc">预计开始时间：{{service.planDateStartStr}}</div>
            </app-cell>
            <div class="box" v-for="item in serviceList">
                <app-cell>
                    <div class="gray">发生日期</div>
                    <div>{{item.occurrenceTimeStr}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">服务内容</div>
                    <div>{{item.recordContent}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">项目进程环节</div>
                    <div>{{item.serviceProcessOption}}</div>
                </app-cell>
                <app-cell>
                    <div class="gray">项目费用金额</div>
                    <div>{{item.projectCostAmount}}元</div>
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
            status: 1,
            selected: '1',
            order: null,
            service: null,
            serviceList: []
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'TOTS02',
                funType: 'findAll',
                projectId: this.projectId
            }).then(data => {
                this.serviceList = data.otherServeRecordList || [];
            })
        },
    },
    created() {
        this.service = this.$store.state.order.serviceInfo;
        this.order = this.$store.state.order.orderInfo;
        this.projectId = this.$route.query.projectId;
        this.fetchData()
    }
}
</script>
