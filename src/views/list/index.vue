<script lang="ts" setup>
  import HeaderBanner from '../../components/HeaderBanner.vue'
  import type { optionListArrayInterface } from '../../interface'

  const optionList: optionListArrayInterface[] = [
    {
      title: '应用目录',
      img: new URL('../../assets/list/yingyong.png', import.meta.url).href
    },
    {
      title: '数据目录',
      img: new URL('../../assets/list/shuju.png', import.meta.url).href
    },
    {
      title: '物联网设备',
      img: new URL('../../assets/list/wulianwang.png', import.meta.url).href,
      url: '/list/InternetThingDevice'
    },
    {
      title: '视联网目录',
      img: new URL('../../assets/list/shilianwang.png', import.meta.url).href,
      url: '/list/VideoNetworkDirectory'
    },
    {
      title: '事件目录',
      img: new URL('../../assets/list/shijian.png', import.meta.url).href,
      url: '/list/EventDirectory'
    },
    {
      title: '单位目录',
      img: new URL('../../assets/list/danwei.png', import.meta.url).href,
      url: '/list/UnitCatalogue'
    },
    {
      title: '厂商目录',
      img: new URL('../../assets/list/cangshang.png', import.meta.url).href
    }
  ]
</script>

<template>
  <div id="data-page">
    <HeaderBanner :optionList="optionList" />
  </div>
</template>
