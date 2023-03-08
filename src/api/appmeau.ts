import request from '../utils/request'

export const  getOrgList = (id: any, params: any) => {
  return request({
    method: 'get',
    url:'/org/orgTreeNode',
    params
  })
}
export const  getList = (id: any, params: any) => {
  return request({
    method: 'get',
    url:'/irs/list',
    params
  })
}
