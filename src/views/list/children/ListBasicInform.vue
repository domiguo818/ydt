<script lang="ts" setup>
  import EquipActive from '../components/EquipActive.vue'
  import { getIotDetail } from '../../../api/list'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import router from '../../../router'

  const itemListData = ref()
  const route = useRoute()
  const weekLongSubmitStat = ref()

  const loadGetIotDetail = async () => {
    const res: any = await getIotDetail(route.query.id)

    weekLongSubmitStat.value = res.weekLongSubmitStat
    itemListData.value = res
    console.log(res)
  }
  loadGetIotDetail()

  const onPush = (id: any) => {
    router.push({ path: '/data/quDataBiaoDetail', query: { id } })
  }

  const onPushEvent = (id: any) => {
    router.push({ path: '/list/ListEventDirectory', query: { id } })
  }
</script>

<template>
  <div id="box">
    <h3>基本信息</h3>
    <f-card round shadow="never" v-if="itemListData">
      <div class="item">
        <p class="title">归属单位：</p>
        <p class="content">{{ itemListData.orgName }}</p>
      </div>

      <div class="item">
        <p class="title">归属应用：</p>
        <p class="content">{{ itemListData.appName }}</p>
      </div>
      <div class="item">
        <p class="title">设备ID：</p>
        <p class="content">{{ itemListData.typeId }}</p>
      </div>
      <div class="item">
        <p class="title">设备类型：</p>
        <p class="content">{{ itemListData.typeName }}</p>
      </div>
      <div class="item">
        <p class="title">设备地址：</p>
        <p class="content">{{ itemListData.address }}</p>
      </div>
      <div class="item">
        <p class="title">上报频度：</p>
        <p class="content">{{ itemListData.frequency }}</p>
      </div>
      <div class="item">
        <p class="title">最近上报：</p>
        <p class="content">{{ itemListData.createTime.slice(0, 10) }}</p>
      </div>
    </f-card>

    <h3>数据目录</h3>
    <f-card shadow="never" round v-if="itemListData">
      <div v-for="(item, i) in itemListData.resList">
        <f-tag
          :key="i"
          type="primary"
          background="#1989fa"
          @click="onPush(i + 1)"
        >
          {{ item.name }}
        </f-tag>
        <br />
        <br />
      </div>
    </f-card>

    <h3>关联事件</h3>
    <f-card shadow="never" round v-if="itemListData">
      <div v-for="(item, i) in itemListData.eventList" @click="onPushEvent(i)">
        <f-tag :key="i" type="primary" background="#1989fa">
          {{ item.name }}
        </f-tag>
        <br />
        <br />
      </div>
    </f-card>

    <h3>设备活跃度</h3>
    <f-card shadow="never" round>
      <EquipActive
        v-if="weekLongSubmitStat"
        :weekLongSubmitStat="weekLongSubmitStat"
      />
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
