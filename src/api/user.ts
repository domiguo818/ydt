import request from '../utils/request'
import type { loginParamsInterface } from '../interface'

/**
 * 登陆
 * @param params 用户信息
 * @returns
 */
export const login = (params: loginParamsInterface) => {
  return request({
    method: 'POST',
    url: '/login',
    params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
