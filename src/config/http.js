import axios from 'axios'
import store from './store.js'
import router from '../router/index.js'
import * as types from './types.js'

axios.defaults.timeout = 5000;
axios.defaults.baseURI = 'https://api.github.com';