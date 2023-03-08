import axios from 'axios'
import { TOKEN_NAME } from './token'
import { getStorage } from './storage'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosRequestHeaders
} from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: 'http://192.168.1.102:18081/api',
  // baseURL: 'http://10.33.188.139:88/api/',
  // baseURL: '/api',
  timeout: 30000
} as const)

// 请求拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig<any>): AxiosRequestConfig<any> => {
    // (config.headers as AxiosRequestHeaders)['Content-Type'] = 'application/x-www-form-urlencoded'

    // const TOKEN = getStorage(TOKEN_NAME)

    // if (TOKEN) {
    //   (config.headers as AxiosRequestHeaders).authorization = TOKEN
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosRequestConfig): AxiosRequestConfig => {
    if ((response.data as any) instanceof Blob) {
      return response.data
    }
    return response.data.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
