<script lang="ts" setup>
  import { ref } from 'vue'
  import DataListVue from '../../components/DataList.vue'
  import { getDataList } from '../../api/data'
  import { getList, getFileList, getAppList } from '../../api/search'

  const searchValue = ref('')
  const tabIndex = ref(1)

  const dataList = ref() // 数据
  const appList = ref() // 应用
  const specialTopicDatabase = ref() // 专题库
  const documentCompile = ref() // 文件汇编

  const load1 = async () => {
    const res: any = await getDataList({
      pageNum: 1,
      pageSize: 10,
      search: searchValue.value
    })
    dataList.value = res.list
    console.log(res)
  }

  const load2 = async () => {
    const res: any = await getAppList({
      pageNum: 1,
      pageSize: 10,
      total: 0,
      search: searchValue.value
    })
    appList.value = res.list
    console.log(res)
  }

  const load3 = async () => {
    const res: any = await getList({
      pageNum: 1,
      pageSize: 10,
      search: searchValue.value
    })
    specialTopicDatabase.value = res.list
    console.log(res)
  }

  const load4 = async () => {
    const res: any = await getFileList({
      pageNum: 1,
      pageSize: 10,
      total: 0,
      search: searchValue.value
    })
    documentCompile.value = res.list
    console.log(res)
  }

  const loadGetDataList = () => {
    switch (tabIndex.value) {
      case 1:
        load1()
        break
      case 2:
        load2()
        break
      case 3:
        load3()
        break
      case 4:
        load4()
        break
    }
  }

  const handleSearch = () => {
    if (!searchValue.value) return
    loadGetDataList()
  }

  const tabsChange = (key: any) => {
    tabIndex.value = key
  }
</script>

<template>
  <div id="search-page">
    <a-input-search
      placeholder="请输入要搜索的内容"
      size="large"
      allow-clear
      v-model="searchValue"
      focus
      @search="handleSearch"
      @press-enter="handleSearch"
    />

    <a-tabs v-model="tabIndex" :default-active-key="1" @change="tabsChange">
      <a-tab-pane :key="1" title="数据">
        <DataListVue v-if="dataList" :dataList="dataList" />
      </a-tab-pane>
      <a-tab-pane :key="2" title="应用">
        <DataListVue v-if="appList" :dataList="appList" />
      </a-tab-pane>
      <a-tab-pane :key="3" title="专题库">
        <DataListVue
          v-if="specialTopicDatabase"
          :dataList="specialTopicDatabase"
        />
      </a-tab-pane>
      <a-tab-pane :key="4" title="文件汇编">
        <DataListVue
          v-if="documentCompile"
          :dataList="documentCompile"
          isFile
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss" scoped>
  #search-page {
    width: 800px;
    margin: auto;
    margin-top: 80px;
    padding: 40px;
    box-sizing: border-box;

    .arco-tabs {
      margin-top: 30px;
    }
  }
</style>
