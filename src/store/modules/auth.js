const auth = {
    state: {
        authInfo: null
    },
    mutations: {
        setAuthInfo(state, authInfo) {
            state.authInfo = authInfo;
        }
    }
};

export default auth;