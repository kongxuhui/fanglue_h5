import http from '../http'

export function findUserByPhone(phone, open = true, close = true) {
    return http.post({
        transCode: 'MUSR09',
        funType: 'findUserByPhone',
        phone: phone
    }, open, close)
}

export function getUserInfoById(userId, open = true, close = true) {
    return http.post({
        transCode: 'MUSR09',
        funType: 'getUserInfoById',
        userId: userId
    }, open, close)
}

export function editUserInfo(data) {
    return http.post({
        transCode: 'MUSR09',
        funType: 'editUserInfo',
        ...data
    })
}