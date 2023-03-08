<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import { getList } from '../../api/search'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const route = useRoute()
  const listData: any = ref()

  const LoadGetList = async () => {
    const res: any = await getList({ pageNum: 1, pageSize: 10 })
    console.log(res)
    listData.value = res.list
  }

  LoadGetList()

  const onClick = (index: any) => {
    // console.log(index)
    router.push({
      path: '/ListspecialTopicDatabaseList',
      query: { id: index + 1 }
    })
  }
</script>

<template>
  <div id="specialTopicDatabase-page">
    <template v-if="listData">
      <f-card
        round
        shadow="never"
        v-for="(item, index) in listData"
        @click="onClick(index)"
      >
        <h3>{{ item.dwName }}</h3>
        <div class="xbox">
          <div class="ite">
            <div><span>字段：</span>{{ item.fieldNum }}</div>
            <div><span>行：</span>{{ item.lineNum }}</div>
          </div>
          <div class="ite" style="margin-left: 50px">
            <div><span>接口：</span>{{ item.interfaceNum }}</div>
            <div><span>表：</span>{{ item.tableNum }}</div>
          </div>
        </div>
      </f-card>
    </template>
  </div>
</template>

<style>
  .f-card {
    min-height: auto;
  }
</style>

<style lang="scss" scoped>
  #specialTopicDatabase-page {
    width: 800px;
    margin: auto;
    padding: 10px 20px;
    box-sizing: border-box;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    .f-card {
      margin-top: 10px;
      display: flex;
      cursor: pointer;

      .xbox {
        display: flex;
      }
    }
  }
</style>
