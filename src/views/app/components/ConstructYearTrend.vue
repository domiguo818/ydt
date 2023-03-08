<script lang="ts" setup>
  import * as echarts from 'echarts/core'
  import { GridComponent } from 'echarts/components'
  import { LineChart } from 'echarts/charts'
  import { UniversalTransition } from 'echarts/features'
  import { CanvasRenderer } from 'echarts/renderers'
  import { ref, onMounted, reactive } from 'vue'

  echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])
  const main = ref(null as unknown as HTMLElement)
  const props = defineProps({
    statsByConstructYear: {
      type: Object,
      required: true
    }
  })

  const option = reactive({
    title: {
      text: '建设年份趋势'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Object.keys(props.statsByConstructYear)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: Object.values(props.statsByConstructYear),
        type: 'line',
        areaStyle: {
          color: 'rgb(232,244,253)'
        }
      }
    ]
  })

  const renderEcharts = () => {
    const myChart = echarts.init(main.value)

    myChart.setOption(option)
  }

  onMounted(() => {
    renderEcharts()
  })
</script>
<template>
  <!-- 建设状态分布 -->
  <div ref="main" style="width: 600px; height: 400px"></div>
</template>

<style scoped></style>
