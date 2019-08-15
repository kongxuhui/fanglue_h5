<template>
	<div class="wrapper">
		<app-header :title="title"></app-header>

		<div class="main" style="height:100%;overflow:hidden;">
			<iframe :src="src" frameborder="0" width="100%" height="100%"></iframe>
		</div>

        <app-button>我要托运</app-button>
	</div>
</template>

<script>
	import appHeader from '@/components/header'
	import appButton from '@/components/button'
	export default {
		data() {
            return {
                src: '',
                title: ''
            };
        },
        components: {
            appHeader,
            appButton
		},
        created() {
			this.src = this.$route.query.src;
			this.title = this.$route.query.title || '专题页';
        }
	}
</script>