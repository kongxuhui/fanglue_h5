<template>
    <div class="wrapper">
        <app-header title="消息"><div slot="left"></div></app-header>
        <div class="main">
            <mt-navbar v-model="selected" style="margin-bottom:10px;">
                <mt-tab-item id="2">订单</mt-tab-item>
                <!-- <mt-tab-item id="3">客服</mt-tab-item> -->
                <mt-tab-item id="1">系统</mt-tab-item>
            </mt-navbar>

            <app-cell arrow v-for="item in dataList" :key="item.id" :class="{unread: item.readStatus == 1}" class="gap" @click.native="handleClick(item)">
                <div>{{item.messageTitle}}</div>
                <div class="gray fs12">{{new Date(item.createTime).Format('yyyy-MM-dd')}}</div>
                <div slot="desc" v-html="item.messageContent"></div>
            </app-cell>
            <app-no-data v-if="!dataList.length">暂无消息</app-no-data>           
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.cell{
    position: relative;
    padding-left: 20px !important;
}
.unread::after{
    position: absolute;
    top: 15px;
    left: 6px;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $warning;
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appCell from '@/components/cell'
import appNoData from '@/components/nodata'
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
    components: {
        appHeader,
        appFooter,
        appCell,
        appNoData,
        [Navbar.name]:Navbar,
        [TabItem.name]:TabItem,
        [TabContainer.name]:TabContainer,
        [TabContainerItem.name]:TabContainerItem,
    },
    data() {
        return {
            dataList: [],
            selected: '2'
        }
    },
    methods: {
        fetchData() {
            this.$http.post({
                transCode: 'MMES01',
                funType: 'findAll',
                pageCount: 100,
                currentPageNum: 1,
                messageType: this.selected,
                userId: this.userId
            }).then(data => {
                this.dataList = data.messageList || []
            })
        },
        handleClick(item) {
            if (item.readStatus == 1) {
                this.$http.post({
                    transCode: 'MMES01',
                    funType: 'update',
                    id: item.id,
                    readStatus: 2
                }).then(data => {
                    this.$store.commit('setMessage',item);
                    this.$router.push('messageDetail');
                })
            } else {
                this.$store.commit('setMessage',item);
                this.$router.push('messageDetail');
            }           
        }
    },
    created() {
        this.userId = this.$store.state.user.userInfo.userId;
        this.selected = this.$route.query.id || '2';
        this.fetchData()
    },
    watch: {
        selected() {
            this.$router.push({
                name: 'message',
                query: {
                    id: this.selected
                }
            })
            this.fetchData()    
        }
    }
}
</script>
