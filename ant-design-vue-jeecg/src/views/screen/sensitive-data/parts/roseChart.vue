<template>
  <div id="rose-chart">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title" style="width: 100%; height: 30px;" ></canvas>
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
  import CRender from '@jiaminghi/c-render'
export default {
  name: 'RoseChart',
  components: {
    CRender,
  },
  data () {
    return {
      option: {}
    }
  },
  methods: {
    createData () {
      const {  } = this
      this.option = {
        series: [
          {
            type: 'pie',
            radius: '50%',
            roseSort: false,
            data: [
              { name: '能源化工', value: 150 },
              { name: '农林牧渔', value: 120 },
              { name: '金属矿产', value: 170 },
              { name: '稀贵金属', value: 100 },
              { name: '文化艺术品', value: 90 }
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: '{name} {percent}%',
              labelLineEndLength: 20,
              style: {
                fontSize: 18,
                fontWeight: 'bold',
                color: ['#37a2da', '#8378ea', '#9fe6b8', '#ff9f7f','#ffdb5c']

              },
              labelLineStyle: {
                color: ['#37a2da', '#8378ea', '#9fe6b8', '#ff9f7f','#ffdb5c']
              }
            },
            roseType: true
          }
        ],
        color: ['#37a2da', '#8378ea', '#9fe6b8', '#ff9f7f','#ffdb5c']
      }
    },
    init() {
      this.cRender = new CRender(this.$refs['graph-title']);
      this.cRender.delAllGraph();
      this.drawTitle(this.cRender);
    },
    drawTitle(render) {
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
          content: '各产业交易单数占总量比例',
          position: centerPoint,
        },
        style: {
          fill: '#9ce5f4',
          fontSize: 24,
          shadowBlur: 0,
          shadowColor: '#66eece',
          hoverCursor: 'pointer',
          scale: [1, 1],
          rotate: 0,
        }
      }
      render.add(graphTitle);
    }
  },
  mounted () {
    const { createData } = this
    createData()
    setInterval(createData, 30000)
    this.init()
  }
}
</script>

<style lang="less">
#rose-chart {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .region-title {
    padding-top: 2.4rem;

    #graph-title {
      line-height: 28px;
    }
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>
