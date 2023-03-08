<script lang="ts" setup>
  import { ref } from 'vue'
  import { getDataList } from '../../../api/security'
  import { useRouter } from 'vue-router'

  const dataList = ref()
  const router = useRouter()

  const loadGetDataList = async () => {
    const res: any = await getDataList({ pageNum: 1, pageSize: 10 })
    console.log(res)
    dataList.value = res.list
  }
  loadGetDataList()

  const onClick = (id: number): void => {
    router.push({ path: '/data/quDataBiaoDetail', query: { id } })
  }
</script>

<template>
  <div id="ClassIfClassIf-page">
    <div
      class="dataList-item"
      v-for="(item, index) in dataList"
      :key="index"
      @click="onClick(item.id)"
    >
      <h3 class="title">{{ item.name }}</h3>

      <main class="main">
        <div class="left">
          <p>数据来源：{{ item.orgName }}</p>
          <p>数据对象：{{ item.dataObject }}</p>
          <p>数据对象：{{ item.shareType }}</p>
        </div>
        <div class="right">
          <p>领域分类：{{ item.className }}</p>
          <p>行数：{{ item.openType }}</p>
        </div>
      </main>
    </div>
    <p class="no-list">没有更多了</p>
  </div>
</template>

<style>
  .f-card {
    min-height: auto;
  }
</style>

<style lang="scss" scoped>
  #ClassIfClassIf-page {
    width: 800px;
    margin: auto;
    padding: 10px 20px;
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
