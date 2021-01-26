<template>
  <div class="left-mid">
    <div class="lm-header">
      <canvas id="graph-title" ref="graph-title" style="width: 100%; height: 30px;" ></canvas>
    </div>
    <dv-capsule-chart class="lm-chart" :config="config" style="width:100%; height:300px;" />
  </div>
</template>

<script>
  import CRender from '@jiaminghi/c-render'
  export default {
    name: 'leftMid',
    components: {
      CRender,
    },
    data () {
      return {
        config: {
          data: [
            { name: '临沂国际商品交易中心', value: 20 },
            { name: '广丰橡胶轮胎交易中心', value: 13 },
            { name: '休斯顿石油装备交易中心', value: 9 },
            { name: '东营富赛能源交易中心', value: 14 },
            { name: '牡丹国际商品交易中心', value: 4 },
            { name: '日照大宗商品交易中心', value: 28 },
            { name: '华东石油交易中心', value: 11 },
            { name: '东亚畜牧现货产品交易中心', value: 6 },
            { name: '国商商品交易中心', value: 9 },
            { name: '威海国际海洋商品交易中心', value: 14 },
            { name: '泰山文化艺术品交易中心', value: 40 }
          ],
          colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
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
        const centerPoint = [w / 2, h / 2];
        const graphTitle = {
          name: 'text',
          animationCurve: 'easeOutBounce',
          hover: true,
          drag: true,
          shape: {
            content: '各交易所交易产品种类数',
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
    }
  }
</script>

<style lang="less">
  .left-mid {
    width: 90%;
    height: 33%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .lm-header {
      margin-top: 10px;
    }

    .lm-chart {
      flex: 1;
    }
  }
</style>
