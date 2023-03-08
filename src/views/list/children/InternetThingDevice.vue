<script lang="ts" setup>
  import { ref } from 'vue'
  import { getIotList } from '../../../api/list'
  import { useRouter } from 'vue-router'

  const dataList = ref()
  const router = useRouter()

  const loadGetIotList = async () => {
    const res: any = await getIotList({ pageNum: 1, pageSize: 10 })
    dataList.value = res.list
  }
  loadGetIotList()

  const onClick = (item: any) => {
    console.log(item.id)
    router.push({ path: '/list/ListBasicInform', query: { id: item.id } })
  }

  const FUNCTION_TYPE = [
    '城市公共视频',
    '城市安全感知',
    '城市建设感知',
    '城市交通感知',
    '城市环境感知',
    '城市运行感知'
  ]
</script>

<template>
  <div id="QuDataStatics-page">
    <div
      class="dataList-item"
      v-for="(item, index) in dataList"
      :key="index"
      @click="onClick(item)"
    >
      <header class="header">
        <h1 class="title">{{ item.name }}</h1>
      </header>

      <main class="main">
        <div class="left">
          <p>设备类型：{{ item.typeName }}</p>
          <p>归属部门：{{ item.orgName }}</p>
        </div>
        <div class="right">
          <p>设备编码：{{ item.deviceCode }}</p>
          <p>设备功能：{{ FUNCTION_TYPE[item.functionType] }}</p>
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
</style>

<style>
  .arco-modal-body {
    overflow: hidden;
  }
</style>
