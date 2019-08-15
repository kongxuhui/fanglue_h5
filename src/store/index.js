import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import consign from './modules/consign'
import message from './modules/message'
import order from './modules/order'
import auth from './modules/auth'
import storage from '@/utils/storage'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        user,
        consign,
        message,
        order,
        auth
    }
})

const userInfo = storage.get('userInfo')

if (userInfo) {
    store.commit('login',userInfo)
}

export default store
