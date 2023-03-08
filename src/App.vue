<script lang="ts" setup>
  import { login } from './api/user'
  import { setStorage } from './utils/storage'
  import { TOKEN_NAME } from './utils/token'

  const onLogin = async () => {
    const res: any = await login({ authCode: '123abc' })
    if (res) {
      setStorage(TOKEN_NAME, res.token)
    }
  }
  onLogin()
</script>

<template>
  <router-view />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
