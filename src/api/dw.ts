import request from '../utils/request'

export const getDetailList = (id: any, params: any) => {
  return request({
    method: 'get',
    url: `/dw/${id}`,
    params
  })
}
