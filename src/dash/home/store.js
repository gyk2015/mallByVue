import * as types from '../../store/mutations';

const module = {
    state: {
        goodsList: []
    },
    getters: { 	
    },
    mutations: {
        [types.QUERY_ALL_GOODS](state,payLoad) {
            state.goodsList = payLoad.data;
        },
    },
    actions: {
    }
};

export default module;