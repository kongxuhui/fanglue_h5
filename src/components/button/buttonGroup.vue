<template>
    <div 
        class="button-group"
        :class="[
            type ? 'button-group-' + type : ''
        ]"
        @click="handleClick"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.button-group{
    display: flex;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid $themeColor;

    .item{
        flex: 1;
    }

    .item + .item{
        border-left: 1px solid $themeColor;
    }
    .selected{
        background-color: $themeColor;
        color: #fff;
    }
}

</style>

<script>
export default {
    name: 'appButtonGroup',
    props: {
        type: String
    },
    methods: {
        handleClick(e) {
            this.$emit('click',e)
        }
    }
}
</script>
