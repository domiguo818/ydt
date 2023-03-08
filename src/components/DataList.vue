<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import type { PropType } from 'vue'
  import { ref } from 'vue'
  import { getFileDetail, getFileSteam } from '../api/search'
  import Pdfh5 from 'pdfh5'
  import 'pdfh5/css/pdfh5.css'

  const visible = ref(false)
  const items = ref()

  const props = defineProps({
    dataListObj: {
      type: Object as PropType<any[]>
    },
    dataList: {
      type: Array as PropType<any[]>
    },
    isFile: {
      type: Boolean,
      default: false
    },
    page: String
  })
  console.log(props.dataListObj)

  const initPdf = (url: any) => {
    new Pdfh5('#PDF', {
      pdfurl: url
    })
  }
  // 页码处理函数
  const emit = defineEmits(['changePage'])
  const pageNum = ref(0)
  const pageChangeHandler = (val) => {
    console.log(val)
    emit('changePage', val)
  }
  //  点击子路由跳转
  const router = useRouter()
  const onClick = async (item: any) => {
    if (!props.isFile) {
      router.push({
        path: '/data/quDataBiaoDetail',
        query: { id: item.id, type: item.type }
      })
    }

    const FileDetail_res = await getFileDetail(item.id)
    const FileSteam_res: any = await getFileSteam(item.id)
    console.log(FileSteam_res)

    if (FileDetail_res) {
      const url = window.URL.createObjectURL(FileSteam_res)
      console.log(url)
      initPdf(url)
    }
    visible.value = true
    items.value = FileDetail_res
  }
</script>

<template>
  <a-modal v-model:visible="visible">
    <h3>基本信息</h3>
    <template v-if="items">
      <div class="item">
        <p class="title">范文单位：</p>
        <p class="content">{{ items.orgName }}</p>
      </div>

      <div class="item">
        <p class="title">发布时间：</p>
        <p class="content">{{ items.releaseTime }}</p>
      </div>

      <div class="item">
        <p class="title">发文编号：</p>
        <p class="content">{{ items.releaseNo }}</p>
      </div>

      <div class="item">
        <p class="title">发文类型：</p>
        <p class="content">{{ items.fileType }}</p>
      </div>

      <div class="item">
        <p class="title">文件大小：</p>
        <p class="content">{{ items.fileSize }}</p>
      </div>
    </template>
    <h3>文件预览</h3>
    <div id="PDF"></div>
  </a-modal>

  <div
    class="dataList-item"
    v-for="(item, index) in dataList"
    :key="index"
    @click="onClick(item)"
  >
    <header class="header">
      <h1 class="title">{{ item.name || item.title || '' }}</h1>
      <div v-if="!isFile" class="option">
        <template v-if="page !== '归集库页面'">
          <f-tag simple type="primary" size="mini">
            {{ item.type === 1 ? '接口' : '数据集' }}
          </f-tag>
          <f-tag
            v-if="!isFile && item.collectedState === 1"
            simple
            type="success"
            size="mini"
          >
            已归集
          </f-tag>
        </template>
      </div>
    </header>

    <main v-if="!isFile" class="main">
      <template v-if="page !== '归集库页面'">
        <div class="left">
          <p><span>来源：</span>{{ item.orgName }}</p>
          <p>访问：{{ item.visitedNum || 0 }} 申请：{{ item.applyNum || 0 }}</p>
        </div>
        <div class="right">
          <p><span>领域分类：</span>{{ item.className }}</p>
          <p>无条件开放 无条件共享</p>
        </div>
      </template>

      <template v-else>
        <div class="left">
          <p><span>英文名称：</span>{{ item.englishName || '-' }}</p>
          <p>行数：{{ item.line || 0 }} 字段数：{{ item.fields || 0 }}</p>
        </div>
        <div class="right">
          <p><span>数据源单位：</span>{{ item.orgName }}</p>
          <p></p>
        </div>
      </template>
    </main>

    <main v-else class="main">
      <div class="left">
        <p><span>发文单位：</span>{{ item.orgName }}</p>
        <p><span>发文编号：</span>{{ item.releaseNo }}</p>
      </div>
      <div class="right">
        <p><span>发文时间：</span>{{ item.releaseTime }}</p>
      </div>
    </main>
  </div>

  <a-pagination
    :total="dataListObj.total"
    :current="pageNum"
    @change="pageChangeHandler"
  />

  <!-- <p class="no-list">没有更多了</p> -->
</template>

<style lang="scss" scoped>
  .f-tag {
    border: none;
  }
  .dataList-item {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px 20px;
    box-sizing: border-box;
    cursor: pointer;
    // 头部
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 15px;
        color: #333;
      }
      .option {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .f-tag-primary {
        margin-right: 10px;
      }
    }

    // 内容
    .main {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      color: #000;

      span {
        color: #818181;
      }
    }
  }

  .no-list {
    text-align: center;
    font-size: 16px;
    color: #969799;
    line-height: 40px;
    user-select: none;
  }
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
</style>
