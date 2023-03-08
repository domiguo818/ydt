/**
 * 项目模块相关
 */

import request from '../utils/request'

export const getProjectList = () => {
  return request({
    method: 'GET',
    url: '/project/list'
  })
}
