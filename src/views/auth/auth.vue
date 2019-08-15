<template>
    <div class="wrapper">
        <app-header title="认证管理"></app-header>
        <div class="main bg-white">
            <app-logo/>
            <div class="text-center">
                <div style="display:inline-block;width:60%;">
                    <app-button @click="handleClick('pAuth')" round style="margin-bottom:30px;">个人认证</app-button>
                    <app-button @click="handleClick('cAuth')" round type="success">企业认证</app-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/header'
import appLogo from '@/components/logo'
import appButton from '@/components/button'

export default {
    components: {
        appHeader,
        appLogo,
        appButton,
    },
    data() {
        return {
            auth: {}
        }
    },
    methods: {
        handleClick(route) {
            this.$router.push(route)
        }
    }
}
</script>
