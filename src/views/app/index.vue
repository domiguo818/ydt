<script lang="ts" setup>
  import { getDetail } from '../../api/app'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import HeaderBanner from '../../components/HeaderBanner.vue'
  import type { optionListArrayInterface } from '../../interface'

  const appList = ref()
  const router = useRouter()

  const loadGetDetail = async (): Promise<void> => {
    const res: any = await getDetail()
    console.log(res)
    appList.value = res.appDataList
  }
  loadGetDetail()

  const onClick = (): void => {
    router.push('/app/dataStatics')
  }

  const optionList: optionListArrayInterface[] = [
    {
      title: '应用目录',
      img: new URL('../../assets/app/mulu.png', import.meta.url).href
    },
    {
      title: '应用注册',
      img: new URL('../../assets/app/zhuce.png', import.meta.url).href
    },
    {
      title: '示范应用',
      img: new URL('../../assets/app/shifan.png', import.meta.url).href
    },
    {
      title: '应用编目',
      img: new URL('../../assets/app/bianmu.png', import.meta.url).href
    },
    {
      title: '应用工厂',
      img: new URL('../../assets/app/gongchang.png', import.meta.url).href
    }
  ]
</script>

<template>
  <div id="app-page">
    <!-- 选项菜单 -->
    <HeaderBanner :optionList="optionList" />

    <ul class="appList">
      <li
        class="appList-item"
        v-for="(item, index) in appList"
        :key="index"
        @click="onClick"
      >
        <h3 class="title">{{ item.value }}</h3>
        <p class="text">{{ item.key }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  #app-page {
    width: 800px;
    margin: auto;
    background: rgb(244, 246, 248);
    min-height: 100vh;
    position: relative;

    .appList {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      position: absolute;
      top: 270px;

      .appList-item {
        list-style: none;
        margin: 10px;
        width: 160px;
        height: 80px;
        background: #fff;
        border-radius: 7px;
        padding: 13px 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 12px rgba(104, 104, 104, 0.12);
        color: #333;
        cursor: pointer;
        user-select: none;

        .title {
          font-size: 20px;
        }
        .text {
          font-size: 13px;

          &::before {
            content: '';
            display: inline-block;
            width: 4px;
            border-radius: 2px;
            height: 15px;
            position: relative;
            top: 3px;
            background: rgb(7, 193, 96);
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
