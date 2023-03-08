<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { getDetailList } from '../../../api/dw'
  import DataListVue from '../../../components/DataList.vue'

  const dataList = ref()
  const route = useRoute()

  console.log(route.query.id)

  const loadGetDataList = async () => {
    const res: any = await getDetailList(route.query.id, {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      type: 0,
      page: 1
    })
    console.log(res)
    dataList.value = res.resVos.list
  }
  loadGetDataList()
</script>

<!-- 归集库 -->
<template>
  <div id="box">
    <DataListVue v-if="dataList" :dataList="dataList" page="归集库页面" />
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
  }
</style>
