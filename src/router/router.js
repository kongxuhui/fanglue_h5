const home = import('@/views/home/home.vue');
const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/account/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/account/register.vue')
    },
    {
        path: '/forgetPwd',
        name: 'forgetPwd',
        component: () => import('@/views/account/forgetPwd.vue')
    },
    {
        path: '/message',
        name: 'message',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/message/message.vue')
    },
    {
        path: '/messageDetail',
        name: 'messageDetail',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/message/messageDetail.vue')
    },
    {
        path: '/userCenter',
        name: 'userCenter',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/userCenter.vue')
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/userInfo.vue')
    },
    {
        path: '/editUserInfo',
        name: 'editUserInfo',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/editUserInfo.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/setting.vue')
    },
    {
        path: '/staff',
        name: 'staff',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/staff.vue')
    },
    {
        path: '/order',
        name: 'order',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/order.vue')
    },
    {
        path: '/orderDetail',
        name: 'orderDetail',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/orderDetail.vue')
    },
    {
        path: '/logistic',
        name: 'logistic',
        component: () => import('@/views/userCenter/logistic.vue')
    },
    {
        path: '/carryPlan',
        name: 'carryPlan',
        component: () => import('@/views/userCenter/carryPlan.vue')
    },
    {
        path: '/carryPlanDetail',
        name: 'carryPlanDetail',
        component: () => import('@/views/userCenter/carryPlanDetail.vue')
    },
    {
        path: '/gathering',
        name: 'gathering',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/gathering.vue')
    },
    {
        path: '/otherService',
        name: 'otherService',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/otherService.vue')
    },
    {
        path: '/serviceDetail',
        name: 'serviceDetail',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/serviceDetail.vue')
    },
    {
        path: '/contractDetail',
        name: 'contractDetail',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/contractDetail.vue')
    },
    {
        path: '/consignList',
        name: 'consignList',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/consignList.vue')
    },
    {
        path: '/consignDetail',
        name: 'consignDetail',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/userCenter/consignDetail.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/about.vue')
    },
    {
        path: '/consign',
        name: 'consign',
        component: () => import('@/views/consign/consign.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/auth/auth.vue')
    },
    {
        path: '/authed',
        name: 'authed',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/auth/authed.vue')
    },
    {
        path: '/pAuth',
        name: 'pAuth',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/auth/pAuth.vue')
    },
    {
        path: '/cAuth',
        name: 'cAuth',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/auth/cAuth.vue')
    },
    {
        path: '/frame',
        name: 'frame',
        component: () => import('@/views/frame/frame.vue')
    },
    {
        path: '/static',
        name: 'static',
        component: () => import('@/views/static/static.vue')
    },
    {
        path: '*',
        component: () => home
    },
    
]
export default routes