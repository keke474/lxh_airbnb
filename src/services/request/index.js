import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

// 新建一个类，通过这个类对axios进行二次封装
class HYRequest {
  constructor(baseURL, timeout) {
    // 单独创建一个axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  // 不同的请求方法
  request (config) {
    return this.instance.request(config)
  }

  get (config) {
    return this.request({ ...config, method: "get" })
  }

  post (config) {
    return this.request({ ...config, method: "post" })
  }
}

const hyRequest = new HYRequest(BASE_URL, TIMEOUT);
export default hyRequest

