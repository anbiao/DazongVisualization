<template>
  <div class="chart1">
    <dv-charts :option="option" />
  </div>
</template>

<script>
  export default {
    name: 'chart1',
    data(){
      return{
        option : {
          title: {
            text: '2020年 大宗商品各类成交额',
            style: {
              fill: '#ffffff',
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              textBaseline: 'bottom'
            }
          },
          legend: {
            data: ['农林牧渔', '能源化工', '金属矿产', '稀贵金属', '文化艺术品'],
            textUnselectedStyle: {
              fontFamily: 'Arial',
              fontSize: 13,
              fill: '#a3a2a3'
            },
            textStyle: {
              fontFamily: 'Arial',
              fontSize: 15,
              fill: '#fff'
            }
          },
          xAxis: {
            name: '月份',
            nameTextStyle: {
              fill: '#ffffff',
              fontSize: 15
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月'],
            dataByText:
              {
                fill: '#ffffff',
                fontSize: 15
              },
            axisLine: //坐标轴线配置
              {
                style: {
                  stroke: '#ffffff',
                  lineWidth: 1
                }
              },
            axisTick://坐标刻度配置
              {
                style: {
                  stroke: '#ffffff',
                  lineWidth: 1
                }
              },
            axisLabel://坐标轴标签配置
              {
                style: {
                  fill: '#ffffff',
                  fontSize: 15,
                }
              }
          },
          yAxis: {
            name: '交易额/十万元',
            data: 'value',
            nameTextStyle: {
              fill: '#ffffff',
              fontSize: 15,
            },
            dataByText:
              {
                fill: '#ffffff',
                fontSize: 15
              },
            axisLine: //坐标轴线配置
              {
                style: {
                  stroke: '#ffffff',
                  lineWidth: 1
                }
              },
            axisTick://坐标刻度配置
              {
                style: {
                  stroke: '#ffffff',
                  lineWidth: 1
                }
              },
            axisLabel://坐标轴标签配置
              {
                style: {
                  fill: '#ffffff',
                  fontSize: 15,
                }
              }
          },
          series: [
            {
              name: '农林牧渔',
              data: [166, 253, 348, 455, 460, 449, 455, 660, 849],
              type: 'bar',
              shapeType: 'normal'
            },
            {
              name: '能源化工',
              data: [420, 430, 422, 435, 420, 427, 422, 435, 420],
              type: 'bar',
              shapeType: 'normal'
            },
            {
              name: '金属矿产',
              data: [344, 330, 235, 640, 632, 638, 640, 632, 638],
              type: 'bar',
              shapeType: 'normal'
            },
            {
              name: '稀贵金属',
              data: [210, 215, 220, 211, 225, 219, 320, 311, 325],
              type: 'bar',
              shapeType: 'normal'
            },
            {
              name: '文化艺术品',
              data: [110, 115, 120, 111, 125, 119, 110, 115, 120],
              type: 'bar',
              shapeType: 'normal'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="less">
  .chart1{
    width: 100%;
    height: 100%;
  }
</style>