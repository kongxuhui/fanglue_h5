<template>
    <div class="flex">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.flex{
    display: flex;
}
</style>

<script>
export default {
    name: 'appFlex',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: String,
        disabled: Boolean,
        round: Boolean
    },
    methods: {
        handleClick(e) {
            this.$emit('click',e)
        }
    }
}
</script>
