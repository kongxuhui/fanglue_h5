<template>
    <div class="wrapper">
        <app-header title="其他服务"></app-header>
        <div class="main">
            <orderHead :order="order" v-if="order"><div>接单员: {{order.individualMember}}</div></orderHead>
            
            <app-cell border arrow v-for="(item, index) in detailList" :key="index" @click.native="handleClick(item)">                       
                <div>{{item.serviceProject}}</div>                                             
                <div class="themeColor" style="padding-right:20px;">{{item.serviceProcessStateStr}}</div>
                <div slot="desc">预计开始时间：{{item.planDateStartStr}}</div>
            </app-cell>
            <app-no-data v-if="!detailList.length">暂无其他服务</app-no-data>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.box {
    .cell{
        padding: 5px 10px;
    }
    margin-bottom: 10px;
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
import appNoData from '@/components/nodata'

export default {
    components: {
        appHeader,
        appCell,
        appIcon,
        orderHead,
        appNoData
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
                transCode: 'OORD01',
                funType: 'findDetailAll',
                id: this.orderId
            }).then(data => {
                this.order = data.order;
                this.detailList = data.otherServeList || [];
            })
        },
        handleClick(item) {
            this.$store.commit('setServiceInfo',item);
            this.$store.commit('setOrderInfo',this.order);
            this.$router.push({
                name: 'serviceDetail',
                query: {
                    projectId: item.projectId
                }
            });
        }
    },
    created() {
        this.orderId = this.$route.query.id;
        this.fetchData();
    }
}
</script>
