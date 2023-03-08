<script lang="ts" setup>
  import { getVideoList } from '../../../api/list'
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  // const dataList = ref()
  const itemListData = ref()

  const loadGetVideoList = async () => {
    const res: any = await getVideoList({ pageNum: 1, pageSize: 10 })
    // dataList.value = res.list
    console.log(res)
    itemListData.value = res.list[route.query.id as unknown as number]
    // console.log(route.query.id)
  }
  loadGetVideoList()
</script>

<template>
  <div id="box">
    <h3>基本信息</h3>
    <f-card v-if="itemListData" shadow="never">
      <div class="item">
        <p class="title">归属单位：</p>
        <p class="content">{{ itemListData.orgName }}</p>
      </div>

      <div class="item">
        <p class="title">单位地址：</p>
        <p class="content">{{ itemListData.orgAddress }}</p>
      </div>

      <div class="item">
        <p class="title">建设期：</p>
        <p class="content">{{ itemListData.constructPeriod }}</p>
      </div>

      <div class="item">
        <p class="title">建设商：</p>
        <p class="content">{{ itemListData.constructCompany }}</p>
      </div>
    </f-card>
  </div>
</template>

<style lang="scss" scoped>
  #box {
    width: 800px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    h3 {
      line-height: 40px;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }
  }

  .f-tag {
    border-radius: 4px;
    border: none;
  }
</style>

<style>
  .f-card {
    min-height: auto !important;
  }
</style>
