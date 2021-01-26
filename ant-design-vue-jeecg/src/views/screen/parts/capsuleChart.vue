<template>
  <div id="capsule-chart-region">
    <div class="region-title">
      <canvas id="graph-title" ref="graph-title"></canvas>
    </div>
    <dv-capsule-chart :config="config" style="width:100%; height: calc(100% - 32px);" />
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

export default {
  name: "capsuleChart",
  props: ["data"],
  components: {
    CRender,
  },
  data() {
    return {
      cRender: null,
      config: {
        data: this.data,
        unit: '系数',
        showValue: true
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
          content: '交易活跃度指数',
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
  #capsule-chart-region {
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

    .label-column {
      font-size: 16px;
    }
  }
</style>