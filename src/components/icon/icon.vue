<template>
    <i class="app-icon iconfont" :class="[type ? type : '',size ? 'icon-'+ size : '']"></i>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.app-icon{
    color: inherit;
    vertical-align: middle;

    &.selected{
        color: $themeColor;
    }

    &.success{
        color: $success;
    }
}
.icon-large{
    font-size: 22px;
}
.icon-medium{
    font-size: 20px;
}
</style>

<script>
export default {
    name: 'appIcon',
    props: {
        type: String,
        size: String
    }
}
</script>
