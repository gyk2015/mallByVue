// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './base/base.less'
import flexible from '../lib/flexible'
import axios from 'axios'
import store from './store'

Vue.use(Mint);
Vue.prototype.$http = axios
Vue.config.productionTip = false

let nTimeout = null;
router.beforeEach((to, from, next) => {
    let storeKey = '';
    let storeObj = null;
    if (to.meta && to.meta.storeKey && to.meta.storeObj) {
        storeKey = to.meta.storeKey;
        storeObj = to.meta.storeObj;
    }

    // 加载页面组件store
    let init = new Promise((resolve, reject) => {
        if (storeKey && storeObj) {
            if (typeof store.state[storeKey] == 'undefined') {
                store.registerModule(storeKey, storeObj.default);
                console.log('register store：' + to.meta.storeKey);
            } else {
                clearTimeout(nTimeout);
            }
        }
        resolve();
    });

    init.then(() => {
        nTimeout = setTimeout(() => {
            if (from.name != to.name && from.meta && from.meta.storeKey) {
                // 卸载页面组件store
                store.unregisterModule(from.meta.storeKey);
                console.log('unregister store：' + from.meta.storeKey);
            }
        }, 1000);
        next();
    });
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
