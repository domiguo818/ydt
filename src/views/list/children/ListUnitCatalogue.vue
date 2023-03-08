<script lang="ts" setup>
  import { ref } from 'vue'
  import { getOrgDetail } from '../../../api/list'
  import { useRoute } from 'vue-router'
  import router from '../../../router'

  const route = useRoute()
  const itemListData: any = ref()

  const loadGetOrgList = async () => {
    const res = await getOrgDetail(route.query.id)
    console.log(res)
    itemListData.value = res
  }
  loadGetOrgList()

  const CONSTRUCT_MAPPING: any = {
    '1': '谋划中',
    '2': '申报中',
    '3': '建设中',
    '4': '运行中',
    '5': '功能变更中'
  }

  const OPEN_TYPE = ['无条件开放', '受限开放', '禁止开放']

  const SHARE_TYPE = ['无条件共享', '受限共享', '非共享']

  const onPush = (id: any) => {
    router.push({ path: '/data/quDataBiaoDetail', query: { id } })
  }
</script>

<template>
  <div id="box">
    <f-card v-if="itemListData" shadow="never">
      <template #title>{{ itemListData.orgName }}</template>
      <h3>应用系统</h3>
      <!-- <a-tabs v-if="itemListData" :default-active-key="1">
        <a-tab-pane
          v-for="(item, index) in itemListData.appVoList"
          :key="index + 1"
          :title="item.name"
        > -->
      <div class="list-data" style="color: rgb(80, 80, 80)">
        <span>系统名称</span>
        <span>建设状态</span>
        <span>建设年份</span>
      </div>
      <div class="list-data" v-for="item in itemListData.appVoList">
        <span>{{ item.name }}</span>
        <span>{{ CONSTRUCT_MAPPING[item.state] }}</span>
        <span>{{ item.constructYear }}</span>
      </div>
      <!-- </a-tab-pane>
      </a-tabs> -->

      <h3>数据目录</h3>
      <!-- <a-tabs v-if="itemListData" :default-active-key="1">
        <a-tab-pane
          v-for="(item, index) in itemListData.resVoList"
          :key="index + 1"
          :title="item.name"
        > -->
      <div class="list-data" style="color: rgb(80, 80, 80)">
        <span>目录名称</span>
        <span>目录类型</span>
        <span>开放类型</span>
        <span>共享类型</span>
      </div>
      <div
        class="list-data"
        v-for="(item, index) in itemListData.resVoList"
        @click="onPush(index + 1)"
      >
        <span class="catalogueName">{{ item.name }}</span>
        <span>{{ item.type === 0 ? '表' : '接口' }}</span>
        <span>{{ OPEN_TYPE[item.openType] || '-' }}</span>
        <span>{{ SHARE_TYPE[item.shareType] || '-' }}</span>
      </div>
      <!-- </a-tab-pane>
      </a-tabs> -->
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
    }
    .catalogueName {
      font-size: 14px;
    }
  }

  .f-tag {
    border-radius: 4px;
    border: none;
  }

  .list-data {
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #eef;
    align-items: center;

    span {
      width: 140px;
      text-align: left;
      font-size: 18px;
    }
  }
</style>

<style>
  .f-card {
    min-height: auto !important;
  }
</style>
