import request from '../utils/request'

export const getIotList = (params: any) => {
  return request({
    method: 'GET',
    url: '/iot/list',
    params
  })
}

/**
 * 视频网目录
 * @param params
 * @returns
 */
export const getVideoList = (params: any) => {
  return request({
    method: 'GET',
    url: '/videoNetworking/list',
    params
  })
}

/**
 * 事件目录
 * @param params
 * @returns
 */
export const getEvents = (params: any) => {
  return request({
    method: 'GET',
    url: '/iot/event/list',
    params
  })
}

/**
 * 单位目录列表
 * @returns
 */
export const getOrgList = () => {
  return request({
    method: 'GET',
    url: '/org/list'
  })
}

/**
 * 物联网设备详情
 * @param id
 * @returns
 */
export const getIotDetail = (id: any) => {
  return request({
    method: 'GET',
    url: `/iot/${id}`
  })
}

/**
 * 单位目录详情
 * @returns
 */
export const getOrgDetail = (id: any) => {
  return request({
    method: 'GET',
    url: `/org/detail/${id}`
  })
}
