<template>
    <footer class="footer">
        <router-link :to="{name:'home'}" class="footer-item">
            <i class="iconfont icon-home"></i>
            <div>首页</div>
        </router-link>
        <router-link :to="{name:'message',query:{id:'2'}}" class="footer-item">
            <i class="iconfont icon-wodexiaoxi" :class="hasUnread ? 'unread' : ''"></i>
            <div>消息</div>
        </router-link>
        <router-link :to="{name:'userCenter'}" class="footer-item">
            <i class="iconfont icon-cc-user"></i>
            <div>个人中心</div>
        </router-link>
        <router-link :to="{name:'about'}" class="footer-item">
            <i class="iconfont icon-cc-users" style="font-size:24px;"></i>
            <div>我们</div>
        </router-link>
    </footer>
</template>

<style lang="scss">
@import '../../assets/scss/var.scss';

.footer{
    display: flex;
    text-align: center;
    background-color: #fff;
    color: $grayColor;
    height: 50px;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid $grayColor;
    
    &-item{        
        flex: 1;
    
        .iconfont{
            font-size: 20px;
            line-height: 20px;   
            position: relative;        
        }

        div{
            color: #747474;
            font-size: 14px;
            line-height: 14px;
        }
    }

    .router-link-active{
        color: $themeColor;
        div{
            color: $themeColor;
        }
    }
}
.unread::after{
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $warning;
}
</style>

<script>
export default {
    name: 'appFooter',
    data() {
        return {
            hasUnread: false
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    },
    created() {
        this.userId = this.$store.state.user.userInfo.userId
        if (this.userId) {
            this.$http.post({
                transCode: 'MMES01',
                type: 'findAll',
                readStatus: 1,
                userId: this.userId
            }).then(data => {
                console.log(data)
                if (data.totalCount == 0) {
                    this.hasUnread = false
                } else {
                    this.hasUnread = true
                }
            })
        }
    },
}
</script>
