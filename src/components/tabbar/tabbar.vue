<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';

.tab{
    display: flex;
    text-align: center;
    background-color: #fff;
    align-items: center;
    padding: 10px 0;
    
    &-item{
        flex: 1;

        .iconfont{
            font-size: 20px;
            line-height: 20px;
        }
    }
}
</style>

<script>
export default {
    name: 'appTabbar'
}
</script>
