<template>
    <div class="wrapper">
        <app-header title="消息内容"></app-header>
        <div class="main bg-white">           
            <app-cell class="message">
                <div>{{message.messageTitle}}</div>
                <div class="gray">{{new Date(message.createTime).Format('yyyy-MM-dd')}}</div>
            </app-cell>          
            <div class="gray" style="padding:10px;padding-top:0;" v-html="message.messageContent"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';
.message .cell-flex{
    padding: 10px 0;
    border-bottom: 1px solid $grayColor;
    margin-bottom: 10px;
}
</style>

<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appCell from '@/components/cell'

export default {
    components: {
        appHeader,
        appFooter,
        appCell,
    },
    data() {
        return {
            message: null
        }
    },
    created() {
        this.message = this.$store.state.message.message;
    }
}
</script>
