<template>
	<div class="wrapper">
		<app-header :title="title"></app-header>

		<div class="main bg-white" style="background-color:#f6f6f6;">
			<div v-html="content"></div>
            <app-no-data v-if="!content">暂无内容</app-no-data>
		</div>

        <app-button bottom v-if="isShow">
            <router-link :to="{name:'consign',query: {type:'consign'}}">我要托运</router-link>
        </app-button>
	</div>
</template>

<style scoped>
.content{
    padding: 10px;
}
</style>

<script>
	import appHeader from '@/components/header'
	import appButton from '@/components/button'
    import CONTENTS from '@/utils/content'
    import appNoData from '@/components/nodata'
	export default {
		data() {
            return {
                title: '',
                content: ''
            };
        },
        components: {
            appHeader,
            appButton,
            appNoData
		},
        created() {
            this.title = this.$route.query.title || '专题页';
            this.content = CONTENTS[this.$route.query.content];
            this.isShow = this.$route.query.showButton;
        }
	}
</script>