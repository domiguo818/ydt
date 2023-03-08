/**
 * 数据模块接口
 */

import request from '../utils/request'

/**
 * 获取数据列表
 * @param params
 * @returns
 */
export const getDataList = (params?: any) => {
  return request({
    method: 'GET',
    url: '/res/list',
    params
  })
}

/**
 * 通过表名获取详细数据列表
 * @param id
 * @returns
 */
export const getTableDetail = (id: string) => {
  return request({
    method: 'GET',
    url: `/dw/table/${id}`
  })
}

/**
 * 通过接口获取详细列表
 * @param id
 * @returns
 */
export const getInterfaceDetail = (id: string) => {
  return request({
    method: 'GET',
    url: `/dw/interface/${id}`
  })
}

export const getTrace = (id: any) => {
  return request({
    method: 'GET',
    url: `/res/table/trace/${id}`
  })
}

export const getFieldTrace = (id) => {
  return request({
    method: 'get',
    url: '/res/field/trace/' + id
  })
}

export const getTableTrace = (id) => {
  return request({
    method: 'get',
    url: '/res/table/trace/' + id
  })
}
