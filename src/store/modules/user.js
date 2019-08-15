import storage from '@/utils/storage'

const user = {
    state: {
        userInfo: {}
    },
    mutations: {
        logout(state) {
            state.userInfo = {}
            storage.remove('userInfo')
        },
        login(state, userInfo) {
            state.userInfo = userInfo;
            storage.set('userInfo',userInfo)
        }
    }
};

export default user;