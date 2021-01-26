<template>
  <div class="right-chart-2" style="width:700px;" >
    <div class="rc1-header">
      <canvas id="graph-title" ref="graph-title" style="width: 100%; height: 24px;" ></canvas>
      <div class="total-score">2 / 10</div>
    </div>
    <div class="rc1-chart-container">
      <dv-water-level-pond :config="config" style="width:200px;height:200px" />
    </div>
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

export default {
  name: 'RightChart2',
  components: {
    CRender,
  },
  data () {
    return {
      config: {
        data: [21],
        shape: 'round'
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
    drawTitle(render) {
      const {
        area: [w, h],
      } = render;
      const centerPoint = [w /6, h / 2];
      const graphTitle = {
        name: 'text',
        animationCurve: 'easeOutBounce',
        hover: true,
        drag: true,
        shape: {
          content: '总体风险系数:',
          position: centerPoint,
        },
        style: {
          fill: '#ffc',
          fontSize: 18,
          shadowBlur: 0,
          shadowColor: '#ffc530',
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
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;

    #graph-title {
      line-height: 28px;
    }

    .total-score {
      margin-left: 24px;
    }
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
}
</style>
