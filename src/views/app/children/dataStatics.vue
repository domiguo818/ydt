<script lang="ts" setup>
  import { getDetail } from '../../../api/app'
  import { ref } from 'vue'
  import PublishStatist from '../components/PublishStatist.vue'
  import ConstructStatusDistribute from '../components/ConstructStatusDistribute.vue'
  import ConstructYearTrend from '../components/ConstructYearTrend.vue'

  const appList = ref()
  const statsByConstructYear = ref() // 建设年份趋势
  const statsByOrg = ref() // 建设单位分布
  const statsByConstructState = ref() // 建设状态分布
  const statsByPub = ref() // 发布端统计

  const loadGetDetail = async (): Promise<void> => {
    const res: any = await getDetail()
    console.log(res)
    appList.value = res.appDataList
    statsByConstructYear.value = res.statsByConstructYear
    statsByOrg.value = res.statsByOrg
    statsByConstructState.value = res.statsByConstructState
    statsByPub.value = res.statsByPub

    console.log((res.statsByOrg['中共杭州市临安区委宣传部'] % 100) + '%')
  }
  loadGetDetail()
</script>

<template>
  <div id="dataStatics">
    <div class="appList appList-first">
      <div class="appList-item" v-for="(item, index) in appList" :key="index">
        <h3 class="title">{{ item.value }}</h3>
        <p class="text">{{ item.key }}</p>
      </div>
    </div>

    <!-- 发布端统计 -->
    <div class="appList">
      <PublishStatist v-if="statsByPub" :statsByPub="statsByPub" />
    </div>

    <!-- 建设状态分布 -->
    <div class="appList">
      <ConstructStatusDistribute
        v-if="statsByConstructState"
        :statsByConstructState="statsByConstructState"
      />
    </div>

    <!-- 建设年份趋势 -->
    <div class="appList">
      <ConstructYearTrend
        v-if="statsByConstructYear"
        :statsByConstructYear="statsByConstructYear"
      />
    </div>

    <!-- 建设单位分布 -->
    <div class="appList">
      <h3>建设单位分布</h3>
      <p>中共杭州市临安区委宣传部</p>
      <!-- <f-progress
        v-if="statsByOrg"
        type="success"
        stripe
        :percentage="statsByOrg['中共杭州市临安区委宣传部']"
        linear
        height="18px"
      /> -->
      <div class="progress">
        <div
          v-if="statsByOrg"
          class="progress-item"
          :style="{
            width: (statsByOrg['中共杭州市临安区委宣传部'] % 100)
          }"
        >
          <div class="inner">
            {{ (statsByOrg['中共杭州市临安区委宣传部'] % 100) }}
          </div>
        </div>
      </div>
      <p>中共杭州市临安区委统一战线工作部</p>

      <div class="progress">
        <div
          v-if="statsByOrg"
          class="progress-item"
          :style="{
            width: (statsByOrg['中共杭州市临安区委统一战线工作部'] % 100) + '%'
          }"
        >
          <div class="inner">
            {{ (statsByOrg['中共杭州市临安区委统一战线工作部'] % 100) + '%' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .progress {
    width: 100%;
    height: 15px;
    margin: 20px 0;
    border-radius: 5px;
    background: #fff;
    .progress-item {
      height: 15px;
      background: rgb(90, 217, 166);
      position: relative;

      .inner {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        width: 34px;
        height: 20px;
        background: rgb(90, 217, 166);
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
  #dataStatics {
    width: 800px;
    margin: auto;
    background: rgb(244, 246, 248);
    padding: 30px;
    box-sizing: border-box;
    min-height: 100vh;

    .appList-first {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }

    .appList {
      background: #fff;
      border-radius: 7px;
      padding: 13px 20px;
      box-sizing: border-box;
      box-shadow: 0px 0px 12px rgba(104, 104, 104, 0.12);
      margin-bottom: 20px;

      .f-progress {
        margin-top: 10px;
      }

      .appList-item {
        margin: 10px;
        width: 140px;
        height: 80px;
        background: #fff;
        border-radius: 7px;
        padding: 13px 20px;
        box-sizing: border-box;
        box-shadow: 0px 0px 12px rgba(104, 104, 104, 0.12);
        color: #333;
        cursor: pointer;
        user-select: none;

        .title {
          font-size: 20px;
        }
        .text {
          font-size: 13px;

          &::before {
            content: '';
            display: inline-block;
            width: 4px;
            border-radius: 2px;
            height: 15px;
            position: relative;
            top: 3px;
            background: rgb(7, 193, 96);
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
