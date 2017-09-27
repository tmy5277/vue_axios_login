import Vue from 'vue'
import Router from 'vue-router'
import store from '../config/store.js'
import * as types from '../config/types.js'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import Repository from '../components/repository.vue'

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Index
    },
    {
    	path:'/reponsitory',
    	name:'reponsitory',
    	component:Repository,
    	meta:{
    		haveLogin: false ,
    	}
    },
    {
    	path:'/',
    	name:'login',
    	component:Login
    }
  ]
})
