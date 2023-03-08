<script lang="ts" setup>
  import HeaderBanner from '../../components/HeaderBanner.vue'
  import type { optionListArrayInterface } from '../../interface'

  const optionList: optionListArrayInterface[] = [
    {
      title: 'IRS目录',
      img: new URL('../../assets/data/IRSmulu.png', import.meta.url).href,
      url: '/data/quDataStatics'
    },
    {
      title: '数据申请',
      img: new URL('../../assets/data/shujushengqing.png', import.meta.url)
        .href,
      url: '/data/quDataStatics'
    },
    {
      title: '省平台数据',
      img: new URL('../../assets/data/shengpingtai.png', import.meta.url).href,
      url: '/data/quDataStatics'
    },
    {
      title: '市平台数据',
      img: new URL('../../assets/data/shipingtai.png', import.meta.url).href,
      url: '/data/quDataStatics'
    },
    {
      title: '区数据目录',
      img: new URL('../../assets/data/shipingtai.png', import.meta.url).href,
      url: '/data/quDataStatics'
    }
  ]
</script>

<template>
  <div id="data-page">
    <HeaderBanner :optionList="optionList" />
  </div>
</template>
