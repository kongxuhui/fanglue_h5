<template>
    <div class="wrapper">
        <div class="main">
            <mt-swipe class="banner gap">
                <mt-swipe-item>
                    <img src="../../assets/images/temp.png" alt="">
                </mt-swipe-item>
            </mt-swipe>

            <app-tabbar class="gap gray fs12">
                <router-link :to="{name:'consign',query: {type:'query'}}" class="tab-item">
                    <img src="../../assets/images/icon1.png" alt="">
                    <div>运价查询</div>
                </router-link>
                <router-link :to="{name:'consign',query: {type:'consign'}}" class="tab-item">
                    <img src="../../assets/images/icon2.png" alt="">
                    <div>我要托运</div>
                </router-link>
                <!-- <router-link :to="{name:'consign',query: {type:'query'}}" class="tab-item">
                    <img src="../../assets/images/icon3.png" alt="">
                    <div>在线咨询</div>
                </router-link> -->
                 <div class="tab-item" @click="call">
                    <img src="../../assets/images/icon4.png" alt="">
                    <div>人工咨询</div>
                </div>
            </app-tabbar>

            <div class="card">
                <div class="card-title">
                    <app-icon class="icon-quanqiuglobal26" type="selected" />
                    特色服务/SPECIAL SERVICE
                </div>
                <div class="flex">
                    <router-link :to="{name:'static',query:{title:'多式联运',content:'lianyun',showButton:true}}" class="flex-item"><img src="../../assets/images/transport1.png" alt=""></router-link>
                    <router-link :to="{name:'static',query:{title:'海陆运输',content:'haiyun',showButton:true}}" class="flex-item"><img src="../../assets/images/transport2.png" alt=""></router-link>
                    <router-link :to="{name:'static',query:{title:'公路运输',content:'kongyun',showButton:true}}" class="flex-item"><img src="../../assets/images/transport3.png" alt=""></router-link>
                    <router-link :to="{name:'static',query:{title:'铁路运输',content:'luyun',showButton:true}}" class="flex-item"><img src="../../assets/images/transport4.png" alt=""></router-link>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <app-icon class="icon-favorite" type="selected" />
                    核心业务/CORE BUSINESS
                </div>
                <!-- <div class="grid gray">
                    <router-link :to="{name:'static',query:{title:'报关报检',content:'baoguan',showButton:true}}" class="grid-item">
                        <app-icon class="icon-baoguan" style="color:#f2a306;" size="large"></app-icon>
                        <div>报关报检</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'保税服务',content:'baosui',showButton:true}}" class="grid-item">
                        <app-icon class="icon-service" style="color:#0abab4;" size="large"></app-icon>
                        <div>报税服务</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'仓储服务',content:'cangchu',showButton:true}}" class="grid-item">
                        <app-icon class="icon-fq_cangchupeizhi" style="color:#558de6;" size="large"></app-icon>
                        <div>仓储服务</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'海外采购',content:'caigou',showButton:true}}" class="grid-item">
                        <app-icon class="icon-purchase" style="color:#fe8751;" size="large"></app-icon>
                        <div>海外采购</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'金融服务',content:'jinrong',showButton:true}}" class="grid-item">
                        <app-icon class="icon-doller" style="color:#788cfc;" size="large"></app-icon>
                        <div>金融服务</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'仓单质押',content:'cangdan',showButton:true}}" class="grid-item">
                        <app-icon class="icon-hezuo" style="color:#529fe9;" size="large"></app-icon>
                        <div>仓单质押</div>
                    </router-link>
                </div> -->
                <div class="grid gray">
                    <router-link :to="{name:'static',query:{title:'保税仓储物流',content:'baosui'}}" class="grid-item">
                        <app-icon class="icon-baoguan" style="color:#f2a306;" size="large"></app-icon>
                        <div>保税仓储物流</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'大宗商品贸易',content:'dazong'}}" class="grid-item">
                        <app-icon class="icon-hezuo" style="color:#0abab4;" size="large"></app-icon>
                        <div>大宗商品贸易</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'供应链物流',content:'maoyi'}}" class="grid-item">
                        <app-icon class="icon-fq_cangchupeizhi" style="color:#558de6;" size="large"></app-icon>
                        <div>供应链物流</div>
                    </router-link>
                    <router-link :to="{name:'static',query:{title:'供应链金融',content:'jinrong'}}" class="grid-item">
                        <app-icon class="icon-doller" style="color:#fe8751;" size="large"></app-icon>
                        <div>供应链金融</div>
                    </router-link>
                </div>
            </div>
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.banner{
    // padding-top: 20px;
    height: 158px;
    // background-color: $themeColor;
    img{
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 360px) {
    .banner{
        height: 197px;
    }
}
@media screen and (max-width: 375px) {
    .banner{
        height: 205px;
    }
}
.tab-item{
    img{
        width: 50%;
    }
}
.card{
    background-color: #fff;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 14px;

    &-title{
        color: #747474;
    }
}
.flex{
    display: flex;
    flex-wrap: wrap;
    &-item{
        flex-basis: 50%;
        padding: 5px;
        img{
            display: block;
        }
    }
}

.grid{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 5px;

    &-item{
        flex-basis: 50%;
        padding: 20px 0;
        border: 1px solid $grayColor;
        margin-top: -1px;
        margin-right: -1px;

        .iconfont{
            font-size: 26px;
        }
    }
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import appTabbar from '@/components/tabbar'
import { Swipe, SwipeItem } from 'mint-ui'

export default {
    components: {
        appHeader,
        appFooter,
        appIcon,
        appCell,
        appTabbar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
    },
    data() {
        return {
            bannerList: [
                {src:'../../assets/images/temp.png',id:1},
                {src:'../../assets/images/temp.png',id:2}
            ],
        }
    },
    methods: {
        call() {
            window.JSDK.call('18503519655')
        },
        handleScroll: function () {
            this.$nextTick(() => {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  

                // 设备/屏幕高度
                let scrollObj = document.getElementsByClassName('main'); // 滚动区域
                scrollObj[0].scrollTop = scrollObj[0].scrollHeight;
                console.log(scrollObj[0].scrollHeight)
            })

            

            // let scrollTop = scrollObj.scrollTop; // div 到头部的距离
            // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
            // //滚动条到底部的条件
            // if(scrollTop+clientHeight == scrollHeight){
            //     // div 到头部的距离 + 屏幕高度 = 可滚动的总高度

            // }  
        }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
}
</script>
