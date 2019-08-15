import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
import http from '@/services/http'
import { Toast } from 'mint-ui'
import { getUserInfoById } from '@/services/user'

Vue.use(Router)

const router = new Router({
	mode: 'history',
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.user.userInfo.userId) {
            // 检测账户是否停用
            // getUserInfoById(store.state.user.userInfo.userId).then(data => {
            //     if (data.code === '000000') {
            //         // next()
            //     } else {
            //         Toast('该用户已停用')
            //     }
            // })
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })         
        }
    } else {
        next()
    }
})

export default router
