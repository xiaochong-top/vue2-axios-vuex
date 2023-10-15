import axios from 'axios'

const api = axios.create({
    timeout: 20000,
    responseType: 'json'
})

// 请求拦截器
api.interceptors.request.use(
    request => {
        return request
    },
error => {
    console.log('axios请求拦截错误==========>',error)
    return Promise.reject(error)
}
)
// 响应拦截器
api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log('axios响应拦截错误==========>',error)
        return Promise.reject(error)
    }
)

export default api
