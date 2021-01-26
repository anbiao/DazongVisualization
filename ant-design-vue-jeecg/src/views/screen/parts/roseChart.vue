<template>
  <div id="rosepie-chart-region">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title"></canvas>
    </div>
    <dv-charts :option="option" style="width:100%; height:calc(100% - 32px);" />
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

export default {
  name: "rosePieChart",
  components: {
    CRender,
  },
  data() {
    const data1 = [
      { name: '农林牧渔', value: 93 },
      { name: '金属矿产', value: 32 },
      { name: '稀有金属', value: 65 },
      { name: '能源化工', value: 44 },
      { name: '文化艺术品', value: 52 },
    ];
    const data2 = [
      { name: '农林牧渔', value: 73 },
      { name: '金属矿产', value: 42 },
      { name: '稀有金属', value: 86 },
      { name: '能源化工', value: 34 },
      { name: '文化艺术品', value: 22 },
    ];
    return {
      cRender: null,
      option: {
        legend: {
          data: ['当月占比(内)', '全年占比(外)'],
          textStyle: {
            fontSize: 16,
            fill: '#fff'
          }
        },
        series: [
          {
            name: '当月占比(内)',
            type: 'pie',
            data: data1,
            radius: '30%',
            outsideLabel: {
              show: false,
              style: {
                fontSize: 18,
                fontWeight: 'bold',
                textBaseline: 'middle'
              }
            },
            insideLabel: {
              show: true,
              style: {
                fontSize: 14,
                fill: '#000',
                marginRight: 10,
                textAlign: 'center',
                textBaseline: 'middle'
              }
            }
          },
          {
            name: '全年占比(外)',
            type: 'pie',
            data: data2,
            radius: ['40%', '55%'],
            outsideLabel: {
              show: true,
              style: {
                fontSize: 18,
                fontWeight: 'bold',
                textBaseline: 'middle'
              }
            },
            insideLabel: {
              show: true,
              style: {
                fontSize: 14,
                fill: '#000',
                marginRight: 10,
                textAlign: 'center',
                textBaseline: 'middle'
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
          content: '各类商品交易量',
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
#rosepie-chart-region {
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