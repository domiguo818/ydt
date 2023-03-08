/**
 * 安全模块接口
 */

import request from '../utils/request'

export const getDataList = (params: any) => {
  return request({
    method: 'GET',
    url: '/res/security/list',
    params
  })
}
