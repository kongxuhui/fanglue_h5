<template>
    <div class="beauty-checkbox">
        <input type="checkbox" id="" :checked="checked" :value="value" @change="handleChange">
        <i class="iconfont"></i>
    </div>
</template>

<style lang="scss">
.beauty-checkbox{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
    input{
        opacity: 0;
        width: 12px;
        height: 12px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }

    .iconfont{    
        display: inline-block;   
        color: inherit;
        font-size: 12px;
        line-height: 12px;
        &::before{
            content: "\e684";
        }
    }

    input:checked + .iconfont:before{
        content: "\e683";
    }
}
</style>

<script>
export default {
    name: 'appCheckbox',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean,
        value: String
    },
    methods: {
        handleChange(e) {
            this.$emit('change',!this.checked);
        }
    }
}
</script>

