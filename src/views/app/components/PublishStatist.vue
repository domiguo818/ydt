<script lang="ts" setup>
  import { init } from 'echarts'
  import { ref, onMounted } from 'vue'

  const main = ref(null as unknown as HTMLElement)

  const props = defineProps({
    statsByPub: {
      type: Object,
      required: true
    }
  })

  const xAxisDataList = (arr: any[]) => {
    const PUBLISH_END: any = {
      '0': '浙里办',
      '1': '浙政钉',
      '2': '数字化改革门户',
      '3': '支付宝',
      '4': '微信',
      '5': '网页',
      '6': 'PC客户端',
      '7': 'APP端',
      '8': '政务服务网'
    }
    return arr.map((item) => {
      return (item = PUBLISH_END[item])
    })
  }

  console.log(props.statsByPub)

  const renderEcharts = () => {
    const myChart = init(main.value)

    myChart.setOption({
      title: {
        text: '发布端统计'
      },
      xAxis: {
        data: xAxisDataList(Object.keys(props.statsByPub))
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: Object.values(props.statsByPub),
          itemStyle: {
            color: 'rgb(24,144,255)'
          }
        }
      ]
    })
  }

  onMounted(() => {
    renderEcharts()
  })
</script>

<template>
  <!-- 发布端统计 -->
  <div ref="main" style="width: 600px; height: 400px"></div>
</template>

<style scoped></style>
