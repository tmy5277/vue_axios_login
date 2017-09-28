import Vuex from 'vuex'
import * as types from './types.js'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		user:{},
		token:null,
		title:''
	},
	mutations:{
		[types.LOGIN]:(state,data)=>{
			localStorage.token = data;
			state.token = data;
		},
		[types.LOGOUT]:(state)=>{
			localStorage.removeItem('token');
			state.token = null;
		},
		[types.TITLE]:(state,data)=>{
			state.title = data;
		},
	}
})