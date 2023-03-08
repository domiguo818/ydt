<script lang="ts" setup>
  import G6 from '@antv/g6'
  import { onMounted } from 'vue'
  import { getFieldTrace, getTableTrace } from '../../../api/data'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const loadDateList = async () => {
    const id = route.query.id
    const type = route.query.type
    const nameId = route.query.nameId
    console.log(nameId)

    if (type === '1') {
      const res = await getTableTrace(id)
      console.log('111进入')
      initChart(res)
      return
    } 
    // else if (type === '1' && name) {
    //   console.log('进入')
    //   const res = await getFieldTrace(name)
    //   initChart(res)
    //   return
    // }

    const res = await getFieldTrace(nameId)
    initChart(res)
  }

  onMounted(() => {
    loadDateList()
  })

  G6.registerNode('card-node', {
    draw: function drawShape(cfg: any, group: any) {
      const r = 2
      const color = '#5B8FF9'
      const w = cfg.size[0]
      const h = cfg.size[1]
      const shape = group.addShape('rect', {
        attrs: {
          x: -w / 2,
          y: -h / 2,
          width: w * 1.2, // 200,
          height: h, // 60
          stroke: color,
          radius: r,
          fill: '#fff'
        },
        name: 'main-box',
        draggable: true
      })

      group.addShape('rect', {
        attrs: {
          x: -w / 2,
          y: -h / 2,
          width: w * 1.2, // 200,
          height: h / 2, // 60
          fill: color,
          radius: [r, r, 0, 0]
        },
        name: 'title-box',
        draggable: true
      })

      group.addShape('text', {
        attrs: {
          textBaseline: 'top',
          x: -w / 2 + 8,
          y: -h / 2 + 24,
          lineHeight: 20,
          text: cfg.id,
          fill: '#000'
        },
        name: 'title'
      })

      group.addShape('text', {
        attrs: {
          textBaseline: 'top',
          x: -w / 2 + 8,
          y: -h / 2 + 4,
          lineHeight: 20,
          text: route.query.type?.toString() === '1' ? '表名' : '字段名',
          fill: '#fff'
        },
        name: 'description'
      })
      return shape
    },
    setState(name, value, item: any) {
      if (name === 'collapsed') {
        const marker = item
          .get('group')
          .find((ele: any) => ele.get('name') === 'collapse-icon')
        const icon = value ? G6.Marker.expand : G6.Marker.collapse
        marker.attr('symbol', icon)
      }
    }
  })

  function initChart(res: any) {
    const container = document.getElementById('container') as HTMLElement
    const width = container.scrollWidth
    const height = container.scrollHeight || 500

    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      modes: {
        default: ['drag-canvas']
      },
      defaultNode: {
        type: 'card-node',
        size: [100, 40]
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          endArrow: true
        }
      },
      layout: {
        type: 'indented',
        direction: 'LR',
        dropCap: false,
        indent: 200,
        getHeight: () => {
          return 60
        }
      }
    })

    const child = combineData(res.parent)

    const chartData = {
      id: callbackName(res),
      children: child
    }

    graph.data(chartData)
    graph.render()
    graph.fitView()
  }

  function combineData(data: any) {
    if (!data) {
      return null
    }
    let res = data
    if (!Array.isArray(data)) {
      res = [data]
    }
    return res.map((item: any) => ({
      id: callbackName(item),
      children: combineData(item.parent)
    }))
  }

  function callbackName(item: any) {
    const type = route.query.type
    if (type === '1') {
      return item.resName
    } else {
      return `${item.tableName}-${item.fieldName}`
    }
  }
</script>

<template>
  <div id="container" />
</template>

<style lang="scss" scoped></style>
