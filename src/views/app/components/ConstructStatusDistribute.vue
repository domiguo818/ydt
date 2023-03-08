<script lang="ts" setup>
  import * as echarts from 'echarts/core'
  import { TooltipComponent, LegendComponent } from 'echarts/components'
  import { PieChart } from 'echarts/charts'
  import { LabelLayout } from 'echarts/features'
  import { CanvasRenderer } from 'echarts/renderers'

  import { ref, onMounted, reactive, computed } from 'vue'

  echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
  ])

  const props = defineProps({
    statsByConstructState: {
      type: Object,
      required: true
    }
  })

  const echartsDate = computed(() => {
    const CONSTRUCT_MAPPING: any = {
      '1': '谋划中',
      '2': '申报中',
      '3': '建设中',
      '4': '运行中',
      '5': '功能变更中'
    }
    const res = []

    for (const key in props.statsByConstructState) {
      const item = { value: key, name: CONSTRUCT_MAPPING[key] }
      res.push(item)
    }

    return res
  })

  const main = ref(null as unknown as HTMLElement)
  const renderEcharts = () => {
    const myChart = echarts.init(main.value)

    const option = reactive({
      title: {
        text: '建设状态分布'
      },
      legend: {
        top: '50%',
        left: 'right'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            show: false,
            position: 'center'
          },
          itemStyle: {
            color: 'rgb(254,93,77)'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          data: echartsDate
        }
      ]
    })

    myChart.setOption(option)
  }

  onMounted(() => {
    renderEcharts()
  })
</script>

<template>
  <!-- 建设状态分布 -->
  <div ref="main" style="width: 600px; height: 400px" />
</template>
