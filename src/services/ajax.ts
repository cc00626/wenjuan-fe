import {message} from 'antd'
import axios from 'axios'
import {getToken} from '../utils/token'
const instance = axios.create({
  timeout: 5000,
})
//配置请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${getToken()}` //添加token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//配置响应拦截器
instance.interceptors.response.use(res => {
  const {errno, msg, data} = res.data
  try {
    if (errno !== 0) {
      if (msg) {
        message.error(msg)
      }
    }
  } catch (error) {
    throw new Error(error as string)
  }
  return data
})

export default instance
export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}
export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
