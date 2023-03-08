<script lang="ts" setup>
  import { ref } from 'vue'
  import { getVideoList } from '../../../api/list'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const dataList = ref()

  const loadGetVideoList = async () => {
    const res: any = await getVideoList({ pageNum: 1, pageSize: 10 })
    dataList.value = res.list
  }
  loadGetVideoList()

  const onClick = (id: any): void => {
    router.push({ path: '/list/ListVideoNetwork', query: { id } })
  }
</script>

<template>
  <div id="QuDataStatics-page">
    <div
      class="dataList-item"
      v-for="(item, index) in dataList"
      :key="index"
      @click="onClick(index)"
    >
      <header class="header">
        <h1 class="title">{{ item.name }}</h1>
      </header>

      <main class="main">
        <p>归属单位：{{ item.orgName }}</p>
        <p>建设期：{{ item.constructPeriod }}</p>
      </main>
    </div>
    <p class="no-list">没有更多了</p>
  </div>
</template>

<style lang="scss" scoped>
  #QuDataStatics-page {
    width: 800px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    .dataList-item {
      background: #fff;
      border-radius: 8px;
      margin-bottom: 10px;
      padding: 15px 20px;
      box-sizing: border-box;
      cursor: pointer;
      // 头部
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: 15px;
          color: #333;
        }
        .option {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .f-tag-primary {
          margin-right: 10px;
        }
      }

      // 内容
      .main {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        color: #333;
      }
    }

    .no-list {
      text-align: center;
      font-size: 16px;
      color: #969799;
      line-height: 40px;
      user-select: none;
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
