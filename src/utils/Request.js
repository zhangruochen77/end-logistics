// 引入 axios
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://192.168.195.130',
    timeout: 15000 // 请求超时时间
})

// 设置响应接口
service.interceptors.response.use(success => {  // 访问到了后端的接口，需要判断是否逻辑正确

    return success

}, error => {

})

export default service