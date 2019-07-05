import axios from "axios"
import Vue from 'vue'
const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.response.use((response) => {
    // Do something with response data
    return response;
}, (error) => {
    // Do something with response error
    if (error.response.data.message) {
        Vue.prototype.$message.error(error.response.data.message)
    }
    return Promise.reject(error);
});
export default http