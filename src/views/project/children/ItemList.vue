<script lang="ts" setup>
  import { getProjectList } from '../../../api/project'
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const dataList = ref()
  const itemListData = ref()
  const route = useRoute()

  const projStateList = (num: number) => {
    const CONSTRUCT_MAPPING: any = {
      '1': '谋划中',
      '2': '申报中',
      '3': '建设中',
      '4': '运行中',
      '5': '功能变更中'
    }

    return CONSTRUCT_MAPPING[num]
  }

  const loadGetProjectList = async () => {
    const res: any = await getProjectList()
    console.log(res)
    dataList.value = res.list

    itemListData.value = res.list[route.query.index]
  }
  loadGetProjectList()
</script>

<template>
  <div id="project-page">
    <h3>基本信息</h3>
    <div class="box" v-if="itemListData">
      <div class="item">
        <p class="title">项目名称：</p>
        <p class="content">{{ itemListData.projName }}</p>
      </div>

      <div class="item">
        <p class="title">建设部门：</p>
        <p class="content">{{ itemListData.consDeprt }}</p>
      </div>

      <div class="item">
        <p class="title">立项时间：</p>
        <p class="content">{{ itemListData.projApprovalDate }}</p>
      </div>

      <div class="item">
        <p class="title">项目简介：</p>
        <p class="content">{{ itemListData.projIntro }}</p>
      </div>

      <div class="item">
        <p class="title">项目联系人：</p>
        <p class="content">{{ itemListData.projContacts }}</p>
      </div>

      <div class="item">
        <p class="title">项目联系人手机号：</p>
        <p class="content">{{ itemListData.projContactsCall }}</p>
      </div>

      <div class="item">
        <p class="title">项目是是否首次新建：</p>
        <p class="content">{{ itemListData.projWhetNew ? '是' : '否' }}</p>
      </div>

      <div class="item">
        <p class="title">项目预算来源：</p>
        <p class="content">{{ itemListData.budgetOrigin }}</p>
      </div>

      <div class="item">
        <p class="title">项目状态：</p>
        <p class="content">{{ projStateList(itemListData.projState) }}</p>
      </div>

      <div class="item">
        <p class="title">立项依据：</p>
        <p class="content">{{ itemListData.projApprovalBasis }}</p>
      </div>

      <div class="item">
        <p class="title">建设层级：</p>
        <p class="content">{{ itemListData.consLevel }}</p>
      </div>

      <div class="item">
        <p class="title">发改编码：</p>
        <p class="content">{{ itemListData.setProjCodeDevlp }}</p>
      </div>

      <div class="item">
        <p class="title">财政编码：</p>
        <p class="content">{{ itemListData.setProjCodeFinan }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #project-page {
    width: 800px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    h3 {
      line-height: 50px;
    }

    .box {
      background: #fff;
    }

    .item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #eef;

      p {
        width: 200px;
      }
    }
  }
</style>
