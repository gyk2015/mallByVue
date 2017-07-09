import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import base_page from '../dash/base_page/base_page'
import home from '../dash/home/home'
import classification from '../dash/classification/classification'
Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'base_page',
      		component: base_page,
      		children:[{
      			path: '/',
      			name: 'home',
      			component: home,
            meta: {
              storeKey: 'home',
              storeObj: require('../dash/home/store')
            }
      		},{
            path: '/classification',
            name: 'classification',
            component: classification
          }]
    	}
  	]
})
