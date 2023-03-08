/**
 * 应用模块接口
 */

import request from '../utils/request'

/**
 * 获取应用列表
 * @returns
 */
export const getDetail = () => {
  return request({
    method: 'get',
    url: '/app/data/stats'
  })
}
