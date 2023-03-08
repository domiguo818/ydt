<script lang="ts" setup>
  import HeaderBanner from '../../components/HeaderBanner.vue'
  import type { optionListArrayInterface } from '../../interface'

  const optionList: optionListArrayInterface[] = [
    {
      title: '网络安全',
      img: new URL('../../assets/security/wangluoanquan.png', import.meta.url)
        .href
    },
    {
      title: '分类分级',
      img: new URL('../../assets/security/fenleifenji.png', import.meta.url)
        .href,
      url: '/security/ClassIfClassIf'
    }
  ]
</script>

<template>
  <div id="data-page">
    <HeaderBanner :optionList="optionList" />
  </div>
</template>
