<script lang="ts" setup>
  import { getProjectList } from '../../api/project'
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  const dataList = ref()
  // const visible = ref(false)
  const router = useRouter()
  const route = useRoute()
  const itemListData = ref()

  const projStateList = (num: number) => {
    const CONSTRUCT_MAPPING: any = {
      '1': '谋划中',
      '2': '申报中',
      '3': '建设中',
      '4': '运行中',
      '5': '功能变更中'
    }

    return CONSTRUCT_MAPPING[num]
  }

  const loadGetProjectList = async () => {
    const res: any = await getProjectList()
    console.log(res)
    dataList.value = res.list
  }
  loadGetProjectList()

  const onClick = (index: any): void => {
    // visible.value = true
    // itemListData.value = item

    router.push({
      path: '/project/ItemList',
      query: { index }
    })
  }
</script>

<template>
  <div id="project-page">
    <div
      class="dataList-item"
      v-for="(item, index) in dataList"
      :key="index"
      @click="onClick(index)"
    >
      <f-header class="header">
        <h3 class="title">{{ item.projName }}</h3>
        <div class="option">
          <f-tag simple type="success" size="mini">IRS</f-tag>
        </div>
      </f-header>
      <f-main>
        <div>
          <div class="item">
            <p class="title">部门：</p>
            <p class="content">{{ item.orgName }}</p>
          </div>
          <div class="item">
            <p class="title">年份：</p>
            <p class="content">{{ item.budgetYear }}</p>
          </div>
        </div>
        <div>
          <div class="item">
            <p class="title">状态：</p>
            <p class="content">{{ projStateList(item.projState) }}</p>
          </div>
        </div>
      </f-main>
    </div>
    <p class="no-list">没有更多了</p>
  </div>

  <!-- <a-modal v-model:visible="visible">
  
  </a-modal> -->
</template>

<style lang="scss" scoped>
  #project-page {
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

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .f-main {
        display: flex;

        .item {
          display: flex;
          justify-content: space-around;
          align-items: center;

          .title {
            color: #818181;
            width: 50px;
            font-weight: bold;
            line-height: 30px;
          }
          .content {
            width: 200px;
            line-height: 30px;
          }
        }
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
