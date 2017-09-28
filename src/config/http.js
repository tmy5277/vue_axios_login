import axios from 'axios'
import store from './store.js'
import router from '../router/index.js'
import * as types from './types.js'

axios.defaults.timeout = 5000;
axios.defaults.baseURI = 'https://api.github.com';

axios.interceptors.request.use(
	request => {
		if (store.state.token) {
			request.headers.Authorization = `token ${store.state.token}`;
		}
		return request;
	},
	err =>{
		return Promise.reject(err);
	});

axios.interceptors.response.use(
	response => {
		return response;
	},
	err =>{
		if (err.response) {
			switch (err.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
		}
		return Promise.reject(err.response.data);
	});

export default axios;