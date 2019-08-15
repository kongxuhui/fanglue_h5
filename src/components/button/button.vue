<template>
    <div 
        class="button"
        :class="[
            type ? 'button-' + type : '',
            size ? 'button-' + size: '',
            {
                'button-disabled': disabled,
                'button-round': round,
                'button-plain': plain,
                'button-bottom': bottom,
            }
        ]"
        @click="handleClick"
    >
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.button{
    text-align: center;
    height: 38px;
    line-height: 38px;
    font-size: 18px;
    border-radius: 4px;
    flex-shrink: 0;

    &-bottom{
        border-radius: 0;
        height: 46px;
        line-height: 46px;
    }

    &-medium{
        display: inline-block;
        padding: 0 20px;
    }
    &-small{
        display: inline-block;
        height: 26px;
        line-height: 26px;
        padding: 0 10px;
        font-size: 12px;
    }
    &-tiny{
        display: inline-block;
        height: 18px;
        line-height: 18px;
        padding: 0 10px;
        font-size: 12px;
    }
    &-default{
        color: #fff;
        background-color: #747474;
        &.button-plain{
            color: #747474;
            background-color: #fff;
            border: 1px solid currentColor;
        }
    }
    &-primary{
        color: #fff;
        background-color: $themeColor;
        &.button-plain{
            color: $themeColor;
            background-color: #fff;
            border: 1px solid currentColor;
        }
    }
    &-success{
        color: #fff;
        background-color: $success;
        &.button-plain{
            color: $success;
            background-color: #fff;
            border: 1px solid currentColor;
        }
    }
    &-warning{
        color: #fff;
        background-color: $warning;
        &.button-plain{
            color: $warning;
            background-color: #fff;
            border: 1px solid currentColor;
        }
    }

    &-disabled{
        opacity: .6;
    }
    &-round{
        border-radius: 20px;
    }

    a{
        display: block;
    }
}

</style>

<script>
export default {
    name: 'appButton',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: String,
        disabled: Boolean,
        round: Boolean,
        plain: Boolean,
        bottom: Boolean
    },
    methods: {
        handleClick(e) {
            this.$emit('click',e)
        }
    }
}
</script>
