import request from '../utils/request'

export const getList = (params?: any) => {
  return request({
    method: 'get',
    url: '/dw/list',
    params
  })
}

export const getFileList = (params?: any) => {
  return request({
    method: 'get',
    url: '/article/list',
    params
  })
}

export const getFileDetail = (id: any) => {
  return request({
    method: 'get',
    url: '/article/' + id
  })
}

export const getFileSteam = (id: any) => {
  return request({
    method: 'get',
    url: `/article/file/${id}`,
    responseType: 'blob'
  })
}

export const getAppList = (params?: any) => {
  return request({
    method: 'GET',
    url: '/app/list',
    params
  })
}
