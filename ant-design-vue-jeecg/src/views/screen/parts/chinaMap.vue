<template>
  <div class="drill-map">
    <div ref="map" style="height: 100%;width: 100%;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

// built-in theme
import 'echarts/theme/dark'

import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'

import 'echarts/lib/component/geo'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

import { cityMap, ProvinceFullName, provinceMap, special } from '@assets/maps/index'

import { data, tradeCenter, tradeMonitor } from '@assets/maps/data'

let shandongMap = require('@assets/maps/province/shandong.json');
let chinaMap = require('@assets/maps/china.json');

let pc = require('@assets/maps/pc.json');
let geoCoordMap = require('@assets/maps/geodata.json');

echarts.registerMap('shandong', shandongMap);
echarts.registerMap('china', chinaMap);

export default {
  data () {
    return {
      pc,
      data,
      tradeCenter,
      tradeMonitor,
      geoCoordMap,
      myChart: {},
      mapdata: [],
      mapName: 'china',
      cityList: {},
      mapName_CN: '',
      cityMap,
      provinceMap,
      special,
      ProvinceFullName
    }
  },
  computed: {
    opt () {
      return {
        backgroundColor: 'rgba(32, 74, 128, 0.3)',
        title: {
          text: '交易中心和清算中心分布图',
          left: 'center',
          textStyle: {
            color: '#d2691e',
            fontSize: '22'
          },
          padding: [
            10,  // up
            10,  // right
            10,  // down
            10,  // left
          ]
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'click'
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['交易中心', '清算中心'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          type: 'map',
          map: this.mapName,
          zoom: 1.2,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#999',
                fontSize: 13
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 13
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          },
          data: this.mapdata
        },
        series: [
          {
            name: '交易中心',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.convertData(this.tradeCenter),
            symbolSize: val => val[2] / 10,
            hoverAnimation: true,
            tooltip: {
              show: true,
              formatter: '{b}',
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'bottom',
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: '清算中心',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.convertData(this.tradeMonitor.sort((a, b) => b.value - a.value).slice(0, 6)),
            symbolSize: val => val[2] / 10,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            tooltip: {
              enterable: true, // 鼠标可移入tooltip中
              formatter: function () {
                window.location.href = 'dashboard/overview';
              }
            },
            label: {
              normal: {
                fontSize: 16,
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#96f826',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ]
      }
    }
  },
  methods: {
    async updateChart () {
      this.myChart.setOption(this.opt)
    },
    clickHandler (params) {
      let name = params.name
      if (name in this.provinceMap) {
        // 如果点击的是34个省、市、自治区，绘制选中地区的二级地图
        let province = require(`@assets/maps/province/${this.provinceMap[name]}.json`);
        province.features.forEach(v => {
          this.mapdata.push({name: v.properties.name})
        })

        this.mapName_CN = this.ProvinceFullName[name]
        this.$store.dispatch("ToggleProvince", this.mapName_CN)

        echarts.registerMap(name, province);
        this.mapName = name
        this.updateChart()
      } else if (name in cityMap) {
        let _cityMap = cityMap
        // 如果是【直辖市/特别行政区】只有二级下钻
        if (special.indexOf(name) >= 0) {
          this.mapName = name
          this.updateChart()
        } else {
          // 显示县级地图
          let city = require(`@assets/maps/city/${_cityMap[name]}.json`);
          city.features.forEach(v => {
            this.mapdata.push({name: v.properties.name})
          })
          echarts.registerMap(name, city)
          this.mapName = name
          this.updateChart()
        }
      } else {
        this.mapName = 'china'
        this.updateChart()
      }
    },
    init () {
      this.myChart = echarts.init(this.$refs.map)
      this.myChart.setOption(this.opt)
      this.myChart.on('click', this.clickHandler)
    },
    convertData (params) {
      const res = []
      for (let i = 0; i < params.length; i++) {
        const geoCoord = this.geoCoordMap[params[i].name]
        if (geoCoord) {
            res.push({
              name: params[i].name,
              value: geoCoord.concat(params[i].value)
            })
          }
        }
      return res
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
  .drill-map {
    height: 100%;
    width: 100%;
  }
</style>