const message = {
    state: {
        message: null
    },
    mutations: {
        setMessage(state, message) {
            state.message = message;
        }
    }
};

export default message;