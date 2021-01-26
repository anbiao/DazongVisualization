<template>
  <div id="radar-chart-region">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title" style="width: 100%; height: 24px;"></canvas>
    </div>
    <dv-charts :option="options" style="width:100%; height:300px;" />
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'
import { getRandomArbitrary } from '@/utils/util'

export default {
  name: "radarChart",
  props: ['riskData'],
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
      data: this.riskData,
      indicators
    }
  },
  computed: {
    options () {
      return {
        legend: {
          textStyle: {
            marginTop: 5,
              fontSize: 14,
              fill: '#333'
          }
        },
        radar: {
          polygon: true,
            indicator: this.indicators,
            axisLabel: {
            style: {
              fontSize: 14,
                fill: '#333'
            }
          }
        },
        series: [
          {
            type: 'radar',
            data: this.data,
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
    init () {
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
          content: '交易中心画像',
          position: centerPoint,
        },
        style: {
          fill: '#000000',
          fontSize: 22,
          shadowBlur: 0,
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
  padding: 16px 8px;

  .region-title {
    padding-top: 0;

    #graph-title {
      line-height: 28px;
    }
  }
}
</style>