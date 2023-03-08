/**
 * 添加本地存储
 * @param name 本地存储名称
 * @param data 本地存储的数据
 */
export const setStorage = (name: string, data: any): void => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}

/**
 * 删除本地存储数据
 * @param name 本地存储名称
 */
export const removeStorage = (name: string): void => {
  window.localStorage.removeItem(name)
}

/**
 * 获取本地存储
 * @param name 本地存储名称
 */
export const getStorage = (name: string): string | null => {
  const data: string | null = window.localStorage.getItem(name)
  return data
}
