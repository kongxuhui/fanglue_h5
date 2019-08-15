<template>
    <div class="wrapper">
        <app-header :title="title"></app-header>
        <div class="main bg-white">
            <div class="form">
                <div class="text-center" style="padding:30px 0;">
                    您已通过{{title}}
                </div>
                <app-button>
                    <router-link :to="{name:'userCenter'}">返回</router-link>
                </app-button>
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
           title: ''
        }
    },
    methods: {
        
    },
    created() {
        this.title = this.$route.query.title;
    }
}
</script>
