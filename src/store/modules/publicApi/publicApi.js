import * as types from '../../mutations';
import Vue from 'vue'

const module = {
    state: {

    },
    mutations: {
        
    },
    actions: {
        [types.PUBLIC_API_ACTION](context, payLoad) {
            return new Promise((resolve, reject) => {
                let method = payLoad.me.$http.get;
                let params = payLoad.params ? payLoad.params : {};
                payLoad.checkedStatus = (payLoad.checkedStatus == undefined ? true : payLoad.checkedStatus);
                params = { params: params };
                if (payLoad.type && payLoad.type == 'post') {
                    method = payLoad.me.$http.post;
                    params = payLoad.params;
                }            
                method(payLoad.url, params).then(function(response) {
                    if (payLoad.checkedStatus) {
                        if (response.data.status == 'success') {                    
                            if (payLoad.mutation) {
                                context.commit(payLoad.mutation, response.data);
                            }
                            resolve(response.data);
                        } else {
                            reject(new Error(response.data.msg));
                        }
                    } else {
                        if (payLoad.mutation) {
                            context.commit(payLoad.mutation, response.data);
                        }
                        resolve(response.data);
                    }
                }).catch(function(error) {
                    reject(error);
                });
            });
        }
    }
};

export default module;