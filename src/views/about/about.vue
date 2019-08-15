<template>
    <div class="wrapper">
        <app-header title="关于我们"><div slot="left"></div></app-header>
        <div class="main">
            <app-logo class="gap bg-white">
            </app-logo>

            <app-cell border arrow justify="left">
                <router-link :to="{name:'static',query:{title:'公司简介',content:'jianjie'}}" class="fill">
                    <div class="circle" style="background:#FF6764">
                        <app-icon class="icon-home" size="medium"></app-icon>
                    </div>
                    <span>公司简介</span>
                </router-link>
            </app-cell>
            <app-cell border arrow justify="left">
                <router-link :to="{name:'static',query:{title:'资质荣誉',content:'zizhi'}}" class="fill">
                    <div class="circle" style="background:#FEB41C">
                        <app-icon class="icon-star" size="medium"></app-icon>
                    </div>
                    <span>资质荣誉</span>
                </router-link>
            </app-cell>
            <!-- <app-cell arrow justify="left">
                <router-link :to="{name:'static',query:{title:'联系我们',content:'contact'}}" class="fill">
                    <div class="circle" style="background:#5FADFF">
                        <app-icon class="icon-phone"></app-icon>
                    </div>
                    <span>联系我们</span>
                </router-link>
            </app-cell> -->
            <div class="bg-white" style="padding: 10px;">
                <img src="../../assets/images/qrcode.jpg" alt="">
            </div>
        </div>
        <keep-alive><app-footer></app-footer></keep-alive>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/var.scss';

.circle{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    margin-right: 10px;
    display: inline-block;
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appIcon from '@/components/icon'
import appLogo from '@/components/logo'
import appCell from '@/components/cell'
import appTabbar from '@/components/tabbar'

export default {
    components: {
        appHeader,
        appFooter,
        appIcon,
        appCell,
        appLogo
    },
    data() {
        return {
            version: '1.0.0'
        }
    },
    created() {
        
    }
}
</script>
