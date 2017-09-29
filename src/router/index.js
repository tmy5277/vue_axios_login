import Vue from 'vue'
import Router from 'vue-router'
import store from '../config/store.js'
import * as types from '../config/types.js'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import Repository from '../components/repository.vue'

Vue.use(Router);

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN,window.localStorage.getItem('token'));
}


const router =  new Router({
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
    	path:'/login',
    	name:'login',
    	component:Login
    }
  ]
})

router.beforeEach((to,from,next) =>{
  if (to.matched.some(r => r.meta.haveLogin)) {
    if (store.state.token) {
      next();
    }
    else{
      next({
        path:'/login',
        query:{redirect: to.fullPath}
      })
    }
  }
  else
  {
    next();
  }
})



export default router;
