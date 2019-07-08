import axios from "axios"
import Vue from 'vue'
import router from '../router'
const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.token){
        config.headers.Authorization = 'Bearer ' + localStorage.token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

http.interceptors.response.use((response) => {
    // Do something with response data
    return response;
}, (error) => {
    // Do something with response error
    if (error.response.data.message) {
        Vue.prototype.$message.error(error.response.data.message)
    }
    if(error.response.status===401){
        router.push('/login')
    }
    return Promise.reject(error);
});
export default http