<template>
    <div 
    class="cell"
    :class="[
        {
            'cell-border': border,
            'cell-arrow': arrow,
            'cell-gap': gap
        }
    ]"
    >
        <div 
        class="cell-flex"
        :class="[
            align ? 'cell-align-' + align : '',
            justify ? 'cell-justify-' + justify : ''
        ]"
        >
            <slot></slot>
        </div>
        <div class="cell-desc" v-if="$slots.desc"><slot name="desc"></slot></div>       
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.cell{
    padding: 10px;   
    background-color: #fff;  
    font-size: 14px;

    &-flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-desc{
        color: #888888;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    &-justify-right{
        justify-content: flex-end;
    }
    &-justify-center{
        justify-content: center;
    }
    &-justify-left{
        justify-content: flex-start;
    }

    &-align-top{
        align-items: flex-start;
    }

    &-border{
        border-bottom: 1px solid $grayColor;
    }

    &-gap{
        margin-bottom: $gap;
    }

    &-arrow{
        position: relative;
        padding-right: 30px;
        &::before{
            font-family: "iconfont";
            content: '\e6a3';
            position: absolute;
            right: 5px;
            top: 50%;
            font-size: 18px;
            line-height: 18px;
            transform: translateY(-50%);
            color: #C0C0C0;
        }
    }
    .fill{
        flex: 1;
    }
}
</style>

<script>
export default {
    name: 'appCell',
    props: {
        align: String,
        justify: String,
        border: Boolean,
        arrow: Boolean,
        gap: Boolean
    }
}
</script>
