<template>
    <div class="wrapper">
        <app-header title="个人资料">
            <router-link :to="{name:'editUserInfo'}" slot="right">编辑</router-link>
        </app-header>
        <div class="main">
            <app-cell class="gap">
                <div>个人头像</div>
                <div  @click="upload"><img :src="userImg || imgUrl" alt=""></div>
            </app-cell>
            <app-cell border>
                <div>昵称</div>
                <div>{{nickName}}</div>
            </app-cell>
            <!-- <app-cell border>
                <div>真实姓名</div>
                <div>{{realName || '未填写'}}</div>
            </app-cell> -->
            <app-cell border>
                <div>性别</div>
                <div>{{sex == 1 ? '男' : '女'}}</div>
            </app-cell>
            <app-cell border>
                <div>出生日期</div>
                <div>{{birthday || '未填写'}}</div>
            </app-cell>
            <!-- <app-cell border>
                <div>居住地</div>
                <div>{{userName}}</div>
            </app-cell> -->
        </div>
    </div>
</template>

<style scoped>
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.cell{
    padding: 15px 10px;
}
</style>

<script>
import appHeader from '@/components/header'
import appIcon from '@/components/icon'
import appCell from '@/components/cell'
import imgUrl from '@/assets/images/avatar.png'

export default {
    components: {
        appHeader,
        appIcon,
        appCell
    },
    data() {
        return {
            userImg: '',
            nickName: '',
            birthday: '',
            sex: 1,
            imgUrl
        }
    },
    methods: {
           upload() {
            let flag='1';
            let uploadType='user_ico'; 
            window.JSDK.uploadImg({flag,uploadType});
            // window.JSDK.uploadImg('', data => {
            //     alert(data.filePath);
            //     this.bizlicenseImg = data.filePath;
            //     this.userInfo.userImg=data.filePath;
            //     store.commit('login', data.user);
            // })
        }
    },
    created() {
        this.userInfo = this.$store.state.user.userInfo;
        this.userImg = this.userInfo.userImg;
        this.nickName = this.userInfo.nickName;
        this.birthday = this.userInfo.birthday;
        this.sex = this.userInfo.sex;
    }
     
}
</script>
