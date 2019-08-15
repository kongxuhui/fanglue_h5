<template>
    <div class="wrapper">
        <app-header title="托运订单"></app-header>
        <div class="main">
            <mt-navbar v-model="selected" style="margin-bottom:10px;">
                <mt-tab-item id="">全部</mt-tab-item>
                <mt-tab-item id="1">待运输</mt-tab-item>
                <mt-tab-item id="2">运输中</mt-tab-item>
                <mt-tab-item id="3">已收货</mt-tab-item>
            </mt-navbar>

            <app-order v-for="item in dataList" :order="item" :key="item.id"></app-order>
            <app-no-data v-if="dataList.length === 0"></app-no-data>           
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style>

</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appCell from '@/components/cell'
import appOrder from '@/components/order'
import appNoData from '@/components/nodata'
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
    components: {
        appHeader,
        appFooter,
        appCell,
        [Navbar.name]:Navbar,
        [TabItem.name]:TabItem,
        [TabContainer.name]:TabContainer,
        [TabContainerItem.name]:TabContainerItem,
        appOrder,
        appNoData
    },
    data() {
        return {
            status: 1,
            selected: '',
            dataList: []
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'OORD01',
                funType: 'findAll',
                pageCount: 1000,
                currentPageNum: 1,
                orderState: this.selected,
                shipperId: this.userInfo.employee && this.userInfo.employee.ownedMerchant || 0
            }).then(data => {
                this.dataList = data.orderList || [];
            })
        },
    },
    created() {
        this.selected = this.$route.query.status || '';
        this.userInfo = this.$store.state.user.userInfo;
        this.fetchData();
    },
    watch: {
        selected() {
            this.fetchData();
        }
    }
}
</script>
