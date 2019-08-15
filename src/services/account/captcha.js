import http from '../http'
import { Toast } from 'mint-ui'

const captchaService = {
    send(mobile) {
        return http.post({
            transCode: 'MVCL01',
            funType: 'sendMobileVelidate',
            phone: mobile
        },false).then(data => {
            if (data.code !== '000000') {
                Toast(data.message)
            }
        })
    },
    check(mobile, captcha) {
        return http.post({
            transCode: 'MVCL01',
            funType: 'chkPhoneCode',
            phone: mobile,
            phoneCode: captcha
        })
    }
}

export default captchaService
