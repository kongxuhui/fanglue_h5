const order = {
    state: {
        orderInfo: null,
        carryInfo: null,
        serviceInfo: null,
    },
    mutations: {
        setOrderInfo(state, orderInfo) {
            state.orderInfo = orderInfo;
        },
        setCarryInfo(state, carryInfo) {
            state.carryInfo = carryInfo;
        },
        setServiceInfo(state, serviceInfo) {
            state.serviceInfo = serviceInfo;
        }
    }
};

export default order;