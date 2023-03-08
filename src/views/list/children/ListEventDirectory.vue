<script lang="ts" setup>
  import { ref } from 'vue'
  import { getEvents } from '../../../api/list'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const itemListData = ref()

  const loadGetEvents = async () => {
    const res: any = await getEvents({ pageNum: 1, pageSize: 10 })
    itemListData.value = res.list[route.query.id as unknown as number]
  }
  loadGetEvents()
</script>

<template>
  <div id="box">
    <h3>基本信息</h3>
    <f-card v-if="itemListData" shadow="never">
      <div class="item">
        <p class="title">设备名称：</p>
        <p class="content">{{ itemListData.eventName }}</p>
      </div>

      <div class="item">
        <p class="title">设备类型：</p>
        <p class="content">{{ itemListData.a }}</p>
      </div>

      <div class="item">
        <p class="title">设备编码：</p>
        <p class="content">{{ itemListData.a }}</p>
      </div>

      <div class="item">
        <p class="title">归属部门：</p>
        <p class="content">{{ itemListData.a }}</p>
      </div>

      <div class="item">
        <p class="title">功能分类：</p>
        <p class="content">{{ itemListData.a }}</p>
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
