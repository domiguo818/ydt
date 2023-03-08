<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router'
  import { ref, onMounted, reactive } from 'vue'
  import * as echarts from 'echarts/core'
  import { GridComponent } from 'echarts/components'
  import { LineChart } from 'echarts/charts'
  import { UniversalTransition } from 'echarts/features'
  import { CanvasRenderer } from 'echarts/renderers'
  import { getTableDetail, getInterfaceDetail } from '../../../api/data'

  echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

  const route = useRoute()
  const router = useRouter()
  const listData = ref()
  const fieldList = ref()
  const req: any = ref([])
  const req2: any = ref([])

  const LoadList = async () => {
    const id: any = route.query.id
    const type: any = route.query.type
    console.log(id)
    console.log(type)

    // 获取接口
    if (type === '1') {
      console.log('type1了')

      const res = await getInterfaceDetail(id)
      console.log(res)

      renderEcharts(res)
      const { input, ouput }: any = res

      const InputObj: any = JSON.parse(input)
      const InputObj2: any = JSON.parse(ouput)

      console.log(InputObj, InputObj2)
      if (InputObj || InputObj2) {
        Object.entries(InputObj).forEach(([key, value]: any[]) => {
          req.value.push({
            name: key,
            explain: value.split(';')?.[0],
            isNecessary: value.split(';')?.[1] === '1' ? '是' : '否'
          })
        })

        Object.entries(InputObj2).forEach(([key, value]: any[]) => {
          req2.value.push({
            name: key,
            explain: value
          })
        })
      }

      listData.value = res

      return
    }
    const res = await getTableDetail(id)
    console.log(res)
    listData.value = res
    fieldList.value = res.fieldList
  }

  const SHARE_TYPE = ['无条件共享', '受限共享', '非共享']
  const OPEN_TYPE = ['无条件开放', '受限开放', '禁止开放']

  const onListClick = (type: '1' | '2', nameId?: string) => {
    router.push({
      path: '/data/TableTraceable',
      query: { id: route.query.id, type, nameId }
    })
  }

  // 点击归集库
  const dianjiguijiku = (item: any) => {
    console.log('点击')
    router.push({
      path: '/data/CollectLibrary',
      query: {
        id: item.id,
        name: item.name
      }
    })
  }
  const METHODS = ['get', 'get/post', 'post', 'put', 'delete']
  const main = ref(null as unknown as HTMLElement)
  const renderEcharts = (res: any) => {
    const myChart = echarts.init(main.value)

    myChart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: Object.keys(res.weekLongVisitStat)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: Object.values(res.weekLongVisitStat),
          type: 'line',
          areaStyle: {
            color: 'rgb(232,244,253)'
          }
        }
      ]
    })
  }
  onMounted(() => {
    LoadList()
  })
</script>

<template>
  <div id="QuDataBiaoDetail-page">
    <f-header>
      <h3>基本信息</h3>
      <f-tag
        v-if="$route.query.type !== '1'"
        type="primary"
        round
        size="small"
        @click="onListClick('1')"
      >
        表溯源
      </f-tag>
    </f-header>
    <f-card round shadow="never" v-if="listData">
      <template v-if="$route.query.type == '1'">
        <div class="item">
          <p class="title">数源单位：</p>
          <p class="content">{{ listData.orgName }}</p>
        </div>

        <div class="item">
          <p class="title">领域分类：</p>
          <p class="content">{{ listData.className || '-' }}</p>
        </div>
        <div class="item">
          <p class="title">数据总量：</p>
          <p class="content">
            {{ (listData.statMap && listData.statMap.totalDataCount) || 0 }}
          </p>
        </div>

        <div class="item">
          <p class="title">时间范围：</p>
          <p class="content">
            {{ listData?.resExtends && listData?.resExtends[0]?.val }}
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
          <p class="title">累计调用量：</p>
          <p class="content">
            {{ (listData.statMap && listData.statMap.totalDataCount) || '0' }}
          </p>
        </div>

        <div class="item">
          <p class="title">申请量：</p>
          <p class="content">
            {{ (listData.statMap && listData.statMap.applyNum) || '0' }}
          </p>
        </div>

        <div class="item">
          <p class="title">接口地址：</p>
          <p class="content">
            {{ listData.url || '-' }}
          </p>
        </div>
      </template>

      <template v-else>
        <div class="item">
          <p class="title">数源单位：</p>
          <p class="content">{{ listData.orgName }}</p>
        </div>

        <div class="item">
          <p class="title">领域分类：</p>
          <p class="content">{{ listData.className || '-' }}</p>
        </div>
        <div class="item">
          <p class="title">数据总量：</p>
          <p class="content">
            {{
              (listData.statMap && listData.statMap.totalDataCount) ||
              listData.fields
            }}
          </p>
        </div>
        <div class="item">
          <p class="title">产生方式：</p>
          <p class="content">
            {{
              route.query.id === '1'
                ? '信息系统产生数据'
                : listData.generateType
            }}
          </p>
        </div>
        <div class="item">
          <p class="title">结构特征：</p>
          <p class="content">
            {{
              route.query.id === '1' ? '结构化数据' : listData.structureFeature
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
                ? `${Math.abs(Number(listData.frequency))}年`
                : '不定期'
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
              @click="dianjiguijiku(item)"
            >
              {{ item.name }}
            </f-button>
          </p>
        </div>
      </template>
    </f-card>

    <f-header>
      <h3>信息摘要</h3>
    </f-header>
    <f-card shadow="never" round>无</f-card>

    <template v-if="$route.query.type == '1'">
      <f-header>
        <h3>调用统计</h3>
      </f-header>
      <f-card shadow="never" round>
        <div ref="main" style="width: 100%; height: 400px"></div>
      </f-card>
    </template>

    <f-header>
      <h3>应用信息</h3>
    </f-header>
    <f-card shadow="never" round>无</f-card>

    <template v-if="$route.query.type !== '1'">
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

      <f-card shadow="never" round v-for="item in fieldList" :key="item.id">
        <f-header>
          <h3>{{ item.name }}</h3>
          <f-tag
            v-if="$route.query.type !== '1'"
            type="primary"
            round
            size="small"
            @click="onListClick('2', '1')"
            >溯源</f-tag
          >
        </f-header>
        <div class="item">
          <p class="title">字段数：</p>
          <p class="content">{{ item.code }}</p>
        </div>
        <div class="item">
          <p class="title">类型：</p>
          <p class="content">{{ item.type }}</p>
        </div>
        <div class="item">
          <p class="title">分类分级：</p>
          <p class="content">{{ item.level }}</p>
        </div>
      </f-card>
    </template>

    <template v-else>
      <template v-if="listData">
        <f-header>
          <h3>请求头部</h3>
        </f-header>
        <f-card shadow="never" round>{{
          listData.header || '无特殊请求头部'
        }}</f-card>

        <f-header>
          <h3>请求参数</h3>
          <p>请求方式：{{ METHODS[listData.requestMethod] || '无' }}</p>
        </f-header>
        <f-card shadow="never" round>
          <div class="query_list">
            <span>参数</span>
            <span>释义</span>
            <span>是否必选</span>
          </div>

          <div v-if="req" v-for="item in req" class="query_list">
            <span>{{ item.name }}</span>
            <span>{{ item.explain }}</span>
            <span>{{ item.isNecessary }}</span>
          </div>
        </f-card>

        <f-header>
          <h3>返回参数</h3>
        </f-header>
        <f-card shadow="never" round>
          <div class="query_list">
            <span>参数</span>
            <span>释义</span>
          </div>

          <div v-if="req2" v-for="item in req2" class="query_list">
            <span>{{ item.name }}</span>
            <span>{{
              typeof item.explain === 'string' ? item.explain : '结构体data'
            }}</span>
          </div>
        </f-card>

        <f-header>
          <h3>结构体data</h3>
        </f-header>
        <template v-if="req2">
          <f-card shadow="never">
            <div class="query_list">
              <span>参数</span>
              <span>释义</span>
            </div>

            <div
              v-if="req2[0]"
              v-for="(item, i, k) in req2[0].explain"
              class="query_list"
            >
              <span>{{ Object.keys(req2[0].explain)[k] }}</span>
              <span>{{ item }}</span>
            </div>
          </f-card>
        </template>

        <f-header>
          <h3>请求范例</h3>
        </f-header>
        <f-card shadow="never" round>{{
          listData.inputExample || '无'
        }}</f-card>

        <f-header>
          <h3>返回范例</h3>
        </f-header>
        <f-card shadow="never" round>{{
          listData.inputExample || '无'
        }}</f-card>
      </template>
    </template>
  </div>
</template>

<style>
  .f-card {
    min-height: auto;
  }
</style>

<style lang="scss" scoped>
  .query_list {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    font-size: 20px;
    border-bottom: 1px solid #eef;
    span {
      width: 200px;
    }
  }
  .query_list:first-child {
    span {
      color: rgb(144, 142, 142);
    }
  }
  .f-header {
    display: flex;
    // justify-content: space-between;
  }
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
</style>
