<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import { getTable } from '../../api/thematicLibraryPage'

  const route = useRoute()
  const listData = ref()
  const traceSourceVisible = ref(false)

  const LoadGetTable = async () => {
    const res = await getTable(route.query.id)
    listData.value = res
    console.log(res)
  }
  LoadGetTable()

  const SHARE_TYPE = ['无条件共享', '受限共享', '非共享']
  const OPEN_TYPE = ['无条件开放', '受限开放', '禁止开放']
</script>

<template>
  <div id="QuDataBiaoDetail-page">
    <f-header>
      <h3>基本信息</h3>
      <f-tag type="primary" round size="small">表溯源</f-tag>
    </f-header>
    <f-card round shadow="never" v-if="listData">
      <div class="item">
        <p class="title">数源单位：</p>
        <p class="content">{{ listData.orgName }}</p>
      </div>

      <div class="item">
        <p class="title">领域分类：</p>
        <p class="content">{{ listData.className }}</p>
      </div>
      <div class="item">
        <p class="title">数据总量：</p>
        <p class="content">
          {{ (listData.statMap && listData.statMap.totalDataCount) || 0 }}
        </p>
      </div>
      <div class="item">
        <p class="title">产生方式：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '信息系统产生数据'
              : listData.generateType
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">结构特征：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '结构化数据'
              : listData.structureFeature
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">储存方式：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '关系型数据库存储方式'
              : listData.storeType
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">安全保护维度：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '核心数据'
              : listData.safetyProtectDimension
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">数据对象维护：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '组织'
              : listData.dataObjectMaintain
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">数据质量要求：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '高质量'
              : listData.dataQualityRequireDimension
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">时间范围：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '2018-至今'
              : listData.timeRange
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">更新频率：</p>
        <p class="content">
          {{
            route.query.id!.toString() === '1'
              ? '不定期'
              : listData.updateFrequency
          }}
        </p>
      </div>
      <div class="item">
        <p class="title">最后更新：</p>
        <p class="content">
          {{ route.query.id!.toString() === '1' ? '-' : listData.updateTime }}
        </p>
      </div>
      <div class="item">
        <p class="title">共享属性：</p>
        <p class="content">{{ SHARE_TYPE[listData.shareType] || '-' }}</p>
      </div>
      <div class="item">
        <p class="title">开放属性：</p>
        <p class="content">{{ OPEN_TYPE[listData.openType] || '-' }}</p>
      </div>
      <div class="item">
        <p class="title">访问量：</p>
        <p class="content">
          {{ (listData.statMap && listData.statMap.visitedNum) || '0' }}
        </p>
      </div>
      <div class="item">
        <p class="title">申请量：</p>
        <p class="content">
          {{ (listData.statMap && listData.statMap.applyNum) || '0' }}
        </p>
      </div>
      <div class="item">
        <p class="title">归属仓库：</p>
        <p class="content">
          <f-button
            v-for="item of listData.dwNameList"
            :key="item.id"
            type="primary"
            color="#1989fa"
            @click="$router.push('/data/quDataStatics')"
          >
            {{ item.name }}
          </f-button>
        </p>
      </div>
    </f-card>

    <f-header>
      <h3>信息摘要</h3>
    </f-header>
    <f-card shadow="never" round>无</f-card>

    <f-header>
      <h3>应用信息</h3>
    </f-header>
    <f-card shadow="never" round>无</f-card>

    <f-header>
      <h3>数据形式</h3>
      <f-tag
        type="primary"
        round
        size="small"
        @click="$router.push('/data/ClassifyGradeInterpret')"
        >分类分级解释</f-tag
      >
    </f-header>

    <a-modal v-model:visible="traceSourceVisible">
      <div class="a">
        <div class="a1">字段名</div>
        <div class="a2">表名2-性别</div>
      </div>
    </a-modal>

    <f-card shadow="never" round>
      <f-header>
        <h3>姓名</h3>
        <f-tag
          type="primary"
          round
          size="small"
          @click="traceSourceVisible = true"
          >溯源</f-tag
        >
      </f-header>
      <div class="item">
        <p class="title">字段：</p>
        <p class="content">name</p>
      </div>
      <div class="item">
        <p class="title">类型：</p>
        <p class="content">string</p>
      </div>
      <div class="item">
        <p class="title">分类分级：</p>
        <p class="content">L2</p>
      </div>
    </f-card>

    <f-card shadow="never" round style="margin-top: 20px">
      <f-header>
        <h3>年龄</h3>
        <f-tag
          type="primary"
          round
          size="small"
          @click="traceSourceVisible = true"
          >溯源</f-tag
        >
      </f-header>
      <div class="item">
        <p class="title">字段：</p>
        <p class="content">age</p>
      </div>
      <div class="item">
        <p class="title">类型：</p>
        <p class="content">int</p>
      </div>
      <div class="item">
        <p class="title">分类分级：</p>
        <p class="content">L4</p>
      </div>
    </f-card>

    <f-card shadow="never" round style="margin-top: 20px">
      <f-header>
        <h3>创建日期</h3>
        <f-tag
          type="primary"
          round
          size="small"
          @click="traceSourceVisible = true"
          >溯源</f-tag
        >
      </f-header>
      <div class="item">
        <p class="title">字段：</p>
        <p class="content">create_time</p>
      </div>
      <div class="item">
        <p class="title">类型：</p>
        <p class="content">timestamp</p>
      </div>
      <div class="item">
        <p class="title">分类分级：</p>
        <p class="content">L5</p>
      </div>
    </f-card>
  </div>
</template>

<style>
  .f-card {
    min-height: auto;
  }
</style>

<style lang="scss" scoped>
  #QuDataBiaoDetail-page {
    width: 800px;
    margin: auto;
    padding: 10px 20px;
    box-sizing: border-box;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    .f-header {
      display: flex;
      align-items: center;

      .f-tag {
        margin-left: 10px;
      }
    }

    .f-card {
      .item {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .title {
          color: #818181;
          width: 200px;
          font-weight: bold;
          line-height: 30px;
        }
        .content {
          width: 200px;
          line-height: 30px;
        }
      }
    }
  }
  .a {
    height: 50px;
    width: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 3px solid rgb(91, 143, 249);

    .a1 {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      background: rgb(91, 143, 249);
    }
    .a2 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      color: #333;
    }
  }
</style>
