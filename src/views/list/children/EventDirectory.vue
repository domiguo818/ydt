<script lang="ts" setup>
  import { ref } from 'vue'
  import { getEvents } from '../../../api/list'

  import { useRouter } from 'vue-router'

  const router = useRouter()

  const dataList = ref()
  const visible = ref(false)

  const loadGetEvents = async () => {
    const res: any = await getEvents({ pageNum: 1, pageSize: 10 })
    dataList.value = res.list
  }
  loadGetEvents()

  // const onClick = (item: any): void => {
  //   visible.value = true
  //   itemListData.value = item
  // }

  const onClick = (id: any): void => {
    router.push({ path: '/list/ListEventDirectory', query: { id } })
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
      @click="onClick(index)"
    >
      <header class="header">
        <h1 class="title">{{ item.eventName }}</h1>
      </header>

      <main class="main">
        <div class="left">
          <p>设备类型：{{ item.iotList[0].typeName }}</p>
          <p>归属部门：{{ item.iotList[0].orgName }}</p>
        </div>
        <div class="right">
          <p>设备编码：{{ item.iotList[0].deviceCode }}</p>
          <p>设备功能：{{ FUNCTION_TYPE[item.iotList[0].functionType] }}</p>
        </div>
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
