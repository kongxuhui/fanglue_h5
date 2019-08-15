<template>
    <header class="header">
        <div class="header-left">
            <slot name="left"><i class="iconfont icon-back" @click="goBack"></i></slot>
        </div>
        <div class="header-title" v-text="title"></div>
        <div class="header-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';

.header{
    display: flex;
    text-align: center;
    background-color: $themeColor;
    color: #fff;
    height: 70px;
    align-items: center;
    padding: 20px 10px 0;
    &-left{
        text-align: left;
        flex: .5;
    }
    &-title{
        flex: 1;
        font-size: 16px;
    }
    &-right{
        text-align: right;
        flex: .5;
    }
    .iconfont{
        font-size: 20px;
    }
}
</style>

<script>
export default {
    name: 'appHeader',
    props: {
        title: String
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
}
</script>
