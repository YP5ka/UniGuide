import axios from 'axios';
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXBVc2VyQGdtYWlsLmNvbSIsImlhdCI6MTY5Nzc5ODc0NywiZXhwIjoxNjk3ODg1MTQ3fQ.mhZgEfMIYn59jpSbrY1s59-T8kqo54Qjs1JcxmXwlXTiHbZZ9NQpAZUvff9towFBytQojtmAk969a2f2PrxgKA"
const instance = axios.create({
    baseURL: 'http://89.108.99.114:8080/api',
    
});

instance.interceptors.request.use( (config)=> {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})


export default instance