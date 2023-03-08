import request from '../utils/request'

export const getThematicLibraryPage = (id: any, params: any) => {
  return request({
    method: 'get',
    url: `dw/${id}`,
    params
  })
}

export const getTable = (id: any) => {
  return request({
    method: 'get',
    url: `dw/table/${id}`
  })
}
