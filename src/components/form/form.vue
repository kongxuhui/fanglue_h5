<template>
    <div class="form-item">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.form-item{
    display: flex;
    border-bottom: 1px solid $grayColor;
    padding: 5px 0;
    align-items: center;

    input,.input{
        border: none;
        flex: 1;
        height: 30px;
        line-height: 30px;
        padding: 5px 10px;
        outline: none;
        -webkit-appearance: none;
        width: 100%;
    }
}
</style>