<script lang="ts" setup>
  import * as echarts from 'echarts/core'
  import { GridComponent } from 'echarts/components'
  import { LineChart } from 'echarts/charts'
  import { UniversalTransition } from 'echarts/features'
  import { CanvasRenderer } from 'echarts/renderers'
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    weekLongSubmitStat: {
      type: Object,
      required: true
    }
  })

  echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

  const main = ref(null as unknown as HTMLElement)
  const renderEcharts = () => {
    var myChart = echarts.init(main.value)

    const dataKey = Object.keys(props.weekLongSubmitStat)
      .map((item) => item.slice(0, 10))
      .reverse()

    const key1 = dataKey[1]
    dataKey[1] = dataKey[2]
    dataKey[2] = key1

    const dataValue = Object.values(props.weekLongSubmitStat)

    const value1 = dataValue[1]
    dataValue[1] = dataValue[2]
    dataValue[2] = value1

    // console.log(dataValue.reverse())

    const option = {
      xAxis: {
        type: 'category',
        data: dataKey
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: dataValue.reverse(),
          type: 'line',
          areaStyle: {
          color: 'rgb(232,244,253)'
        }
        }
      ]
    }
    myChart.setOption(option)
  }

  onMounted(() => {
    renderEcharts()
  })
</script>

<template>
  <!-- 设备活跃度 -->
  <div ref="main" style="width: 100%; height: 400px" />
</template>
