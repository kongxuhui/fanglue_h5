const consign = {
    state: {
        consignInfo: null,
        consignApplyOrder: null
    },
    mutations: {
        setConsignInfo(state, consignInfo) {
            state.consignInfo = consignInfo;
        },
        setConsignApplyOrder(state, consignApplyOrder) {
            state.consignApplyOrder = consignApplyOrder;
        }
    }
};

export default consign;