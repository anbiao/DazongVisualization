<template>
  <div id="gauge-chart-region">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title"></canvas>
    </div>
    <dv-charts :option="option" style="width:100%; height: calc(100% - 32px);" />
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

export default {
  name: "gaugeChart",
  components: {
    CRender,
  },
  data() {
    const data = [
      { name: '华北区', value: 65, gradient: ['rgb(55, 162, 218)', 'rgb(55, 162, 218)', 'rgb(55, 162, 218)'] },
      { name: '东北区', value: 75, gradient: ['rgb(50, 197, 233)', 'rgb(50, 197, 233)', 'rgb(50, 197, 233)'], radius: '65%' },
      { name: '华中区', value: 35, gradient: ['rgb(103, 224, 227)', 'rgb(103, 224, 227)', 'rgb(103, 224, 227)'], radius: '55%' },
      { name: '华东区', value: 66, gradient: ['rgb(159, 230, 184)', 'rgb(159, 230, 184)', 'rgb(159, 230, 184)'], radius: '45%' },
      { name: '华南区', value: 51, gradient: ['rgb(255, 219, 92)', 'rgb(255, 219, 92)', 'rgb(255, 219, 92)'], radius: '35%' },
      { name: '西北区', value: 47, gradient: ['rgb(255, 159, 127)', 'rgb(255, 159, 127)', 'rgb(255, 159, 127)'], radius: '25%' },
      { name: '西南区', value: 83, gradient: ['rgb(251, 114, 147)', 'rgb(251, 114, 147)', 'rgb(251, 114, 147)'], radius: '15%' }
    ];
    return {
      cRender: null,
      option: {
        series: [
          {
            type: 'gauge',
            radius: '75%',
            splitNumber: 25,
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 12,
            data: data,
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            backgroundArc: {
              show: false
            },
            details: {
              show: true,
              formatter: '{name}：{value}',
              position: 'start',
              offset: [-10, 0],
              style: {
                fill: '#1ed3e5',
                fontSize: 16,
                textAlign: 'right',
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.cRender = new CRender(this.$refs['graph-title']);
      this.cRender.delAllGraph();
      this.drawTitle(this.cRender);
    },
    drawTitle (render) {
      const {
        area: [w, h],
      } = render;
      const centerPoint = [w / 2, h / 2];
      const graphTitle = {
        name: 'text',
        animationCurve: 'easeOutBounce',
        hover: true,
        drag: true,
        shape: {
          content: '地区交易商数量',
          position: centerPoint,
        },
        style: {
          fill: '#9ce5f4',
          fontSize: 22,
          shadowBlur: 0,
          shadowColor: '#66eece',
          hoverCursor: 'pointer',
          scale: [1, 1],
          rotate: 0,
        }
      }
      render.add(graphTitle);
    }
  }
}
</script>

<style lang="less">
#gauge-chart-region {
  flex: 1 1 auto;
  height: 50%;
  padding: 16px 8px;

  .region-title {
    width: 100%;
    height: 32px;
    padding: 2px 0;

    #graph-title {
      width: 100%;
      height: 28px;
    }
  }
}
</style>