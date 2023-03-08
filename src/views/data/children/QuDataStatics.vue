<script lang="ts" setup>
  import { ref } from 'vue'
  import { getDataList } from '../../../api/data'
  import DataListVue from '../../../components/DataList.vue'

  const dataList = ref()
  const dataListObj = ref()

  const loadGetDataList = async (params) => {
    const res: any = await getDataList(params)
    console.log(res)
    dataList.value = res.list
    dataListObj.value = res
  }
  loadGetDataList()
  // 修改页码事件
  const changePage = (num) => {
    console.log(num)
    loadGetDataList({ pageNum: num, pageSize: 10 })
  }
</script>

<template>
  <div id="QuDataStatics-page">
    <DataListVue
      v-if="dataList"
      :dataList="dataList"
      :dataListObj="dataListObj"
      @changePage="changePage"
    />
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
  }
</style>
