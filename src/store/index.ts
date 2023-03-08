import { defineStore } from 'pinia'
import { login } from '../api/user'
import { setStorage } from '../utils/storage'
import { TOKEN_NAME } from '../utils/token'

export const useStore = defineStore('main', {
  // 定义数据
  state: () => ({}),
  actions: {
    // 登陆
    onLogin: async (): Promise<void> => {
      const res: any = await login({ authCode: '123abc' })
      if (res) {
        setStorage(TOKEN_NAME, res.token)
      }
    }
  }
})
