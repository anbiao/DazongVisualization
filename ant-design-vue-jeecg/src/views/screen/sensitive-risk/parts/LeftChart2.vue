<template>
  <div class="cloud-words-container">
    <div class="cloud-words-title">实时热点事件关键词</div>
    <div class="cloud-words-chart">
      <v-chart :width="500" :height="400" :padding="pad" :data="data" :scale="scale">
        <v-tooltip :show-title="false" />
        <v-coord type="rect" direction="TL" />
        <v-point position="x*y" color="category" shape="cloud" tooltip="value*category" />
      </v-chart>
    </div>
  </div>
</template>
<script>
import { registerShape } from 'viser-vue';
const DataSet = require('@antv/data-set');
const cloudsData = require('@assets/data/dadou.json');

const scale = [
  { dataKey: 'x', nice: false },
  { dataKey: 'y', nice: false },
];

registerShape('point', 'cloud', {
  draw(cfg, container) {
    return container.addShape('text', {
      attrs: {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic',
        ...cfg.style,
        x: cfg.x,
        y: cfg.y,
      },
    });
  }
});

export default {
  name: 'LeftChart2',
  data() {
    return {
      pad:[0],
      cloudsData,
      data: [],
      scale,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init () {
      const dv = new DataSet.View().source(this.cloudsData);
      const range = dv.range('value');
      const min = range[0];
      const max = range[1];
      dv.transform({
        type: 'tag-cloud',
        fields: ['x', 'value'],
        size: [500, 400],
        font: 'Verdana',
        color: '#9ce5f4',
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate() {
          let random = ~~(Math.random() * 4) % 4;
          if (random === 2) {
            random = 0;
          }
          return random * 90; // 0, 90, 270
        },
        fontSize(d) {
          if (d.value) {
            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
          }
          return 0;
        }
      });
      this.data = dv.rows;
    }
  }
};
</script>

<style lang="less">
.cloud-words-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .cloud-words-title {
    font-size: 28px;
    margin-bottom: 8px;
    text-align: center;
    color: #9ce5f4;
    line-height: 28px;
  }

  .cloud-words-chart {
    height: 400px;
  }
}
</style>