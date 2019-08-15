import http from '../http'
import store from '@/store'
import router from '@/router'
import storage from '@/utils/storage'
import { Toast } from 'mint-ui'

const loginService = (data, open = true, close = true) => {
    return http.post({
        source: 1,
        systemFlag: 1,
        transCode: 'MUSR01',
        funType: 'userLogin',
        ...data
    }, open, close)
    .then(data => {
        if (data.code === '000000') {
            store.commit('login', data.userInfo)
            window.JSDK.responseUSER(data.userInfo)
            router.replace(router.currentRoute.query.redirect || 'userCenter')
        } else {
            Toast(data.message)
        }
        return data
    })
}

export default loginService