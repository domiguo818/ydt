<script lang="ts" setup>
  import { getThematicLibraryPage } from '../../api/thematicLibraryPage'
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'

  const route = useRoute()
  const router = useRouter()

  const dataList: any = ref()

  const loadgetThematicLibraryPage = async () => {
    const res: any = await getThematicLibraryPage(route.query.id, {
      pageNum: 1,
      pageSize: 10,
      type: 1
    })
    console.log(res)
    dataList.value = res.resVos.list
  }
  loadgetThematicLibraryPage()

  const onClick = (id) => {
    router.push({
      path: '/data/quDataBiaoDetail',
      query: { id }
    })
  }
</script>

<template>
  <div id="box">
    <f-card shadow="never">
      <div class="body">
        <span>表/接口名</span>
        <span>英文名</span>
        <span>数源单位</span>
        <span>行数</span>
        <span>字段数</span>
      </div>

      <div
        class="body"
        v-for="(item, index) in dataList"
        @click="onClick(index + 1)"
      >
        <span>{{ item.name }}</span>
        <span>{{ item.englishName || '-' }}</span>
        <span>{{ item.orgName }}</span>
        <span>{{ item.line }}</span>
        <span>{{ item.fields }}</span>
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

    .body {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      height: 50px;
      font-size: 18px;
      cursor: pointer;
    }
  }
</style>
