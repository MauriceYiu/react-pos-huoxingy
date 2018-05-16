import axios from 'axios';
import {
    catchError
} from './../utils/resErr';

const instance = axios.create({
    baseURL: 'https://api.huoxingy.com/v1/pos/',
    timeout: 1000
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
// axios请求拦截器
instance.interceptors.request.use(config => {
    let token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, error => {
    return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
    return response;
}, catchError);

export default instance;