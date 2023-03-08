<script lang="ts" setup>
  import { ref } from 'vue'
  import { getOrgList, getOrgDetail } from '../../../api/list'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const dataList = ref()

  const loadGetOrgList = async () => {
    const res: any = await getOrgList()
    console.log(res)
    dataList.value = res
  }
  loadGetOrgList()

  const listHandleClick = (item: any) => {
    router.push({ path: '/list/ListUnitCatalogue', query: { id: item.id } })
  }
  function getData(data: any) {
    return data.map((e: any) => {
      return {
        id: e.id,
        name: e.orgName,
        children: getData(e.children || [])
      }
    })
  }
  const searchInput = ref('')
  const onSearch = () => {
    if (!searchInput.value) return
    const orgNameList = dataList.value.filter((item: any) => {
      return item.orgName.includes(searchInput.value)
    })

    dataList.value = orgNameList
    // console.log(orgNameList)

    // orgNameList.map((item, index) => {
    //   str.includes('a')
    // })
  }
</script>

<template>
  <div id="QuDataStatics-page">
    <a-input-search
      v-model="searchInput"
      placeholder="请输入要搜索的内容"
      @search="onSearch"
      @press-enter="onSearch"
    />

    <a-collapse :default-active-key="[1]" accordion>
      <a-collapse-item
        v-for="(item, index) in dataList"
        :key="index.toString()"
        :header="item.orgName"
      >
        <div
          v-for="(m, i) in item.children"
          :key="i"
          class="collapse-item"
          @click="listHandleClick(m)"
        >
          {{ m.orgName }}
        </div>
      </a-collapse-item>
    </a-collapse>
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

    .collapse-item {
      cursor: pointer;
    }
  }
</style>
