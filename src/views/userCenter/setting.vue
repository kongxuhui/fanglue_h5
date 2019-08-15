<template>
    <div class="wrapper">
        <app-header title="设置">
        </app-header>
        <div class="main">
            <app-cell class="gap">
                <div>会员名</div>
                <div>{{username || 'xxx'}}</div>
            </app-cell>
            
            <app-cell >
                <div>当前版本</div>
                <div>{{version}}</div>
            </app-cell>
        </div>
        <app-button bottom @click="logout">退出登录</app-button>
    </div>
</template>

<style scoped>

</style>

<script>
import appHeader from '@/components/header'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import appButton from '@/components/button'

export default {
    components: {
        appHeader,
        appIcon,
        appCell,
        appButton
    },
    data() {
        return {
            username: '',
            version: '1.0.0'
        }
    },
    created() {
        const userInfo = this.$store.state.user.userInfo;
        this.username = userInfo.userName;
    },
    methods: {
        logout() {
            this.$store.commit('logout')
            this.$router.push('login')
        }
    }
}
</script>
