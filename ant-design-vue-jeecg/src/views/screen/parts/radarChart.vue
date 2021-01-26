<template>
  <div id="radar-chart-region">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title"></canvas>
    </div>
    <dv-charts :option="option" style="width:100%; height: calc(100% - 32px);" />
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

export default {
  name: "radarChart",
  components: {
    CRender,
  },
  data() {
    const indicators = [
      { name: '价格波动风险', max: 10 },
      { name: '流动性风险', max: 10 },
      { name: '投机性风险', max: 10 },
      { name: '套期保值风险', max: 10 },
      { name: '交易履约风险', max: 10 }
    ];
    return {
      cRender: null,
      option: {
        legend: {
          data: ['华北', '东北', '华中', '华东', '华南', '西北', '西南'],
          textStyle: {
            fontSize: 12,
            fill: '#fff'
          },
          textUnselectedStyle: {
            fontSize: 12,
            fill: '#999'
          }
        },
        radar: {
          polygon: true,
          indicator: indicators,
          axisLabel: {
            style: {
              fontSize: 16,
              fontWeight: 'bold',
              fill: '#fff'
            }
          }
        },
        series: [
          {
            name: '东北',
            type: 'radar',
            data: [3, 8, 4, 6, 2],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '华北',
            type: 'radar',
            data: [4, 5, 3, 8, 5],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '华中',
            type: 'radar',
            data: [7, 4, 2, 3, 6],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '华东',
            type: 'radar',
            data: [2, 4, 6, 1, 7],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '华南',
            type: 'radar',
            data: [4, 6, 2, 5, 7],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '西北',
            type: 'radar',
            data: [6, 4, 2, 8, 1],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
          },
          {
            name: '西南',
            type: 'radar',
            data: [2, 4, 8, 5, 8],
            label: {
              show: false
            },
            animationCurve: 'easeOutBounce'
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
          content: '总体风险类型分布',
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
#radar-chart-region {
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