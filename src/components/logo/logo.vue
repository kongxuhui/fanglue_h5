<template>
    <div class="logo-box">
        <img src="../../assets/logo.png" alt="" class="logo">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.logo-box{
   text-align: center;
   padding: 40px 0;
}
.logo{
    width: 50%;
}
</style>

<script>
export default {
    name: 'appLogo',
    props: {
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>
