<template>
  <div class="risk-bottom-chart">
    <dv-border-box-13>
      <v-chart :force-fit="true" height="280" :padding="padding" :data="data" :scale="scale">
        <v-tooltip />
        <v-legend :custom="true" :clickable="false" :items="legendItems"/>
        <v-view v-for="(item, i) in data" :key="i" :start="getStart(i)" :end="getEnd(i)" :data="[item]" :scale="getScale(item, i)">
          <v-coord type="rect" direction='LB'/>
          <v-axis dataKey="target" :show="false"/>
          <v-axis dataKey="actual" position="right"/>
          <v-point position="title*target" color="#square" shape="line" :size="12" :v-style="style1"/>
          <v-interval position="title*actual" color="#223273" :size="15"/>
          <v-guide type="region" :start="getGuide(item, 0, 'start')" :end="getGuide(item, 0, 'end')"
                   :v-style="style2"/>
          <v-guide type="region" :start="getGuide(item, 1, 'start')" :end="getGuide(item, 1, 'end')"
                   :v-style="style3"/>
          <v-guide type="region" :start="getGuide(item, 2, 'start')" :end="getGuide(item, 2, 'end')"
                   :v-style="style4"/>
          <v-guide type="region" :start="getGuide(item, 3, 'start')" :end="getGuide(item, 3, 'end')"
                   :v-style="style5"/>
          <v-guide type="region" :start="getGuide(item, 4, 'start')" :end="getGuide(item, 4, 'end')"
                   :v-style="style6"/>
        </v-view>
      </v-chart>
    </dv-border-box-13>
  </div>
</template>

<script>
// theme为导出的主题数据
const theme = {
  "axis": {
    "top": {
      "position": "top",
      "title": null,
      "label": {
        "offset": 14,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "lineHeight": 20,
          "textBaseline": "middle",
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        },
        "autoRotate": true
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "zIndex": -1,
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1
        },
        "hideFirstLine": true
      }
    },
    "bottom": {
      "position": "bottom",
      "title": null,
      "label": {
        "offset": 22,
        "autoRotate": true,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "lineHeight": 20,
          "textBaseline": "middle",
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        }
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "zIndex": -1,
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1
        },
        "hideFirstLine": true
      }
    },
    "left": {
      "position": "left",
      "title": null,
      "label": {
        "offset": 12,
        "autoRotate": true,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "lineHeight": 20,
          "textBaseline": "middle",
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        }
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "zIndex": -1,
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1
        },
        "hideFirstLine": true
      }
    },
    "right": {
      "position": "right",
      "title": null,
      "label": {
        "offset": 12,
        "autoRotate": true,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "lineHeight": 20,
          "textBaseline": "middle",
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        }
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1
        },
        "hideFirstLine": true
      }
    },
    "circle": {
      "zIndex": 1,
      "title": null,
      "label": {
        "offset": 12,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "lineHeight": 20,
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        }
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1,
          "lineDash": [
            3,
            3
          ]
        },
        "hideFirstLine": true
      }
    },
    "radius": {
      "zIndex": 0,
      "label": {
        "offset": 12,
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14",
          "textBaseline": "middle",
          "lineHeight": 20,
          "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
        }
      },
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "stroke": "#BFBFBF",
        "length": 4,
        "alignWithLabel": true
      },
      "grid": {
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1,
          "lineDash": [
            3,
            3
          ]
        },
        "type": "circle"
      }
    },
    "helix": {
      "label": {
        "textStyle": {
          "fill": "#fff",
          "fontSize": "14"
        }
      },
      "title": null,
      "line": {
        "lineWidth": 1,
        "stroke": "#BFBFBF"
      },
      "tickLine": {
        "lineWidth": 1,
        "length": 4,
        "stroke": "#BFBFBF",
        "alignWithLabel": true
      },
      "grid": {
        "lineStyle": {
          "stroke": "#E9E9E9",
          "lineWidth": 1
        },
        "type": "circle"
      }
    }
  },
  "legend": {
    "right": {
      "position": "right",
      "layout": "vertical",
      "itemMarginBottom": 8,
      "width": 16,
      "height": 156,
      "title": null,
      "textStyle": {
        "fill": "#fff",
        "fontSize": 12,
        "textAlign": "start",
        "textBaseline": "middle",
        "lineHeight": 20,
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
      },
      "unCheckColor": "#bfbfbf"
    },
    "left": {
      "position": "left",
      "layout": "vertical",
      "itemMarginBottom": 8,
      "width": 16,
      "height": 156,
      "title": null,
      "textStyle": {
        "fill": "#fff",
        "fontSize": 12,
        "textAlign": "start",
        "textBaseline": "middle",
        "lineHeight": 20,
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
      },
      "unCheckColor": "#bfbfbf"
    },
    "top": {
      "position": "top",
      "offset": 6,
      "layout": "horizontal",
      "title": null,
      "itemGap": 10,
      "width": 156,
      "height": 16,
      "textStyle": {
        "fill": "#8C8C8C",
        "fontSize": 12,
        "textAlign": "start",
        "textBaseline": "middle",
        "lineHeight": 20,
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
      },
      "unCheckColor": "#bfbfbf"
    },
    "bottom": {
      "position": "bottom",
      "offset": 6,
      "layout": "horizontal",
      "title": null,
      "itemGap": 10,
      "width": 156,
      "height": 16,
      "textStyle": {
        "fill": "#fff",
        "fontSize": 12,
        "textAlign": "start",
        "textBaseline": "middle",
        "lineHeight": 20,
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
      },
      "unCheckColor": "#bfbfbf"
    },
    "html": {
      "g2-legend": {
        "height": "auto",
        "width": "auto",
        "position": "absolute",
        "overflow": "auto",
        "fontSize": "12px",
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\"",
        "lineHeight": "20px",
        "color": "#fff"
      },
      "g2-legend-title": {
        "marginBottom": "4px"
      },
      "g2-legend-list": {
        "listStyleType": "none",
        "margin": 0,
        "padding": 0
      },
      "g2-legend-list-item": {
        "cursor": "pointer",
        "marginBottom": "5px",
        "marginRight": "24px"
      },
      "g2-legend-marker": {
        "width": "9px",
        "height": "9px",
        "borderRadius": "50%",
        "display": "inline-block",
        "marginRight": "8px",
        "verticalAlign": "middle"
      }
    },
    "gradient": {
      "textStyle": {
        "fill": "#8C8C8C",
        "fontSize": 12,
        "textAlign": "center",
        "textBaseline": "middle",
        "lineHeight": 20,
        "fontFamily": "\"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto,\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",SimSun, \"sans-serif\""
      },
      "lineStyle": {
        "lineWidth": 1,
        "stroke": "#fff"
      },
      "unCheckColor": "#bfbfbf"
    },
    "margin": [
      0,
      20,
      24,
      5
    ],
    "legendMargin": 24
  },
}
// 注册主题
const { Global } = window.G2
Global.registerTheme('myTheme', theme)
//注册完后，设置主题
Global.setTheme('myTheme')

const data = [
  {"title":"价格波动风险", "ranges": [1, 2, 3, 4, 5, 5], "actual": 2.5, "target": 3.5},
  {"title":"流通性风险", "ranges": [1, 2, 3, 4, 5, 5], "actual": 1, "target": 4.0},
  {"title":"投机性风险", "ranges": [1, 2, 3, 4, 5, 5], "actual": 1.2, "target": 3.8},
  {"title":"套期保值风险", "ranges": [1, 2, 3, 4, 5, 5], "actual": 0.5, "target": 4.5},
  {"title":"交易履约风险", "ranges": [1, 2, 3, 4, 5, 5], "actual": 1.5, "target": 3.0}
];

const scale = [{
  dataKey: 'population',
  tickInterval: 5,
}];

const legendItems = [
  {
    value: '正常',
    marker: {symbol: 'square', fill: '#B3E8A7', radius: 5}
  },
  {
    value: '低风险',
    marker: {symbol: 'square', fill: '#A7E8B4', radius: 5}
  },
  {
    value: '中风险',
    marker: {symbol: 'square', fill: '#FFD591', radius: 5}
  },
  {
    value: '高风险',
    marker: {symbol: 'square', fill: '#F18F62', radius: 5}
  },
  {
    value: '应急响应',
    marker: {symbol: 'square', fill: '#F84E4E', radius: 5}
  },
  {
    value: '实际值',
    marker: {symbol: 'square', fill: '#223273', radius: 5}
  },
  {
    value: '告警值',
    marker: {
      symbol: 'line',
      stroke: '#d70000',
      radius: 5
    }
  },
];

let y = 0;
const yGap = 0.1;

export default {
  name: 'riskBottomChart',
  methods: {
    getStart(i) {
      const { y, yGap } = this;
      return {x:0, y: y + i * yGap + i * 0.125};
    },
    getEnd(i) {
      const { y, yGap } = this;
      return {x: 1, y: y + (i+1) * yGap + i * 0.125};
    },
    getScale (item, i) {
      const ranges = item.ranges;
      return [{
        dataKey: 'actual',
        min: 0,
        max: ranges[5],
        nice: false
      }, {
        dataKey: 'target',
        min: 0,
        max: ranges[5],
        nice: false
      }];
    },
    getGuide(viewData, guideIndex, position) {
      const ranges = viewData.ranges;
      const guide = [
        {start: [-1, 0], end:[1, ranges[0]]},
        {start: [-1, ranges[0]], end: [1, ranges[1]]},
        {start: [-1, ranges[1]], end: [1, ranges[2]]},
        {start: [-1, ranges[2]], end: [1, ranges[3]]},
        {start: [-1, ranges[3]], end: [1, ranges[4]]}
      ];
      return guide[guideIndex][position];
    },
  },
  data() {
    return {
      data,
      padding:[40, 80, 40, 160],
      style1:{
        lineWidth: 2
      },
      style2:{
        fill: '#B3E8A7',
        fillOpacity: 0.85
      },
      style3:{
        fill: '#A7E8B4',
        fillOpacity: 0.85
      },
      style4:{
        fill: '#FFD591',
        fillOpacity: 0.85
      },
      style5:{
        fill: '#F18F62',
        fillOpacity: 0.85
      },
      style6:{
        fill: '#F84E4E',
        fillOpacity: 0.85
      },
      scale,
      legendItems,
      y,
      yGap,
    };
  }
};
</script>

<style lang="less">
.risk-bottom-chart {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
