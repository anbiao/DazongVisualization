<template>
  <div id="sensitive-view">
    <dv-full-screen-container>
      <top-header :cargos="currentCargo"/>
      <div class="main-content">
        <div class="decoration-content-top">
          <dv-decoration-3 style="width:250px;height:30px;" />
          <redirect-button/>
          <dv-decoration-3 style="width:250px;height:30px;" />
        </div>
        <div class="decoration-content">
          <dv-border-box-11 title="交易风险智能分析与预警平台" :titleWidth=320 >
            <div class="content">
              <div class="left-content">
                <dv-border-box-10>
                  <capsule-chart :data="capsuleData" v-if="update" />
                  <rose-pie-chart />
                </dv-border-box-10>
              </div>
              <div class="middle-content">
                <div class="middle-content-top">
                  <dv-border-box-7>
                    <china-map />
                  </dv-border-box-7>
                </div>

                <div class="middleTags">
                  <dv-decoration-7 style = "width: 150px">
                    <a-button type = "button" class = "active" id="btn0" @click="changetags(0)">风险</a-button>
                  </dv-decoration-7>
                  <dv-decoration-7 style = "width: 150px">
                    <a-button type = "button" class = "active" id="btn1" @click="changetags(1)">公告</a-button>
                  </dv-decoration-7>
                </div>

                <div class="middle-content-bottom">
                    <scroll-board_sensitive v-show="tags==0" class="board"/>
                    <scroll-board_notice v-show="tags==1" class="board"/>
                </div>
              </div>
              <div class="right-content">
                <dv-border-box-10>
                  <radar-chart />
                  <gauge-chart />
                </dv-border-box-10>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="decoration-content-bottom">
          <dv-decoration-8 style="width:300px;height:50px;" />
          <div class="time-wrapper">当前时间：{{ date }}</div>
          <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './parts/topHeader'
import chinaMap from './parts/chinaMap'
import redirectButton from './parts/redirectButton'
import scrollBoard_sensitive from './parts/scrollboardSensitive'
import capsuleChart from './parts/capsuleChart'
import rosePieChart from './parts/roseChart'
import radarChart from './parts/radarChart'
import gaugeChart from './parts/gaugeChart'
import scrollBoard_notice from './parts/scrollboardNotice'


import { getRandomArbitrary } from '@/utils/util'
import { mapGetters } from 'vuex'

export default {
  name: 'sensitiveIndexView',
  components: {
    scrollBoard_notice,
    scrollBoard_sensitive,
    topHeader,
    redirectButton,
    rosePieChart,
    capsuleChart,
    chinaMap,
    radarChart,
    gaugeChart
  },
  data () {
    return {
      date: new Date(),
      update: true,
      regions: [
        '华北区', '东北区', '华中区', '华东区', '华南区', '西北区', '西南区'
      ],
      currentCargo: "",
      selectCargoList: ["大豆", "玉米", "花生", "生姜"],
      capsuleDataList: {},
      tags: 0
    }
  },
  created () {
    this.currentCargo = this.cargo();
    this.capsuleDataList = this.loadCapsuleChartData()
  },
  computed: {
    capsuleData () {
      return this.capsuleDataList[this.currentCargo]
    }
  },
  //mounted是在el挂载到实例上后调用，一般第一个业务逻辑会在这里开启
  mounted:function(){
    const _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function(){
      //设置定时器，每秒执行一次function函数，
      //函数是获取当前时间并给date变量赋值(每秒赋值一次)
      _this.date = new Date();  //修改数据date
    },1000);
  },
  beforeDestroy:function() {
    if (this.timer) {
      clearInterval(this.timer);  //在Vue实例销毁前，清除定时器
    }
  },
  methods: {
    ...mapGetters(["cargo"]),
    loadCapsuleChartData () {
      const dataList = {}
      this.selectCargoList.forEach(item => {
        let data = []
        this.regions.forEach(item => {
          data.push({
            name: item,
            value: 100 - getRandomArbitrary(0, 20)
          })
        })
        dataList[item] = data
      })
      return dataList;
    },
    middletags(tag) {
      if (tag == this.tags) {
        return true;
      } else {
        return false;
      }
    },
    changetags(tag) {
      var vanish;
      var appear;
      if (this.tags == tag)
        return;
      else{
        if (this.tags == 0){
          vanish = document.getElementById("btn0");
          appear = document.getElementById("btn1");
        }
        else{
          vanish = document.getElementById("btn1");
          appear = document.getElementById("btn0");
        }
        this.tags = tag;
      }

    }
  }
}
</script>

<style lang="less">
#sensitive-view {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./sensitive-data/img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px 20px 10px;

    .decoration-content-top {
      display: flex;
      justify-content: space-between;
    }

    .decoration-content {
      height: 100%;
      flex: 1;
      display: flex;
      padding: 0 20px;

      .content {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 50px 20px 30px 20px;

        .left-content {
          position: relative;
          flex: 1 1 auto;
          flex-direction: column;
          width: 25%;
          height: 100%;
        }

        .middle-content {
          position: relative;
          flex: 1 1 auto;
          flex-direction: column;
          width: 50%;
          height: 100%;

          .middle-content-top {
            position: relative;
            width: 100%;
            height: 70%;
            padding: 16px;

            .cargos-select {
              position: absolute;
              margin-top: -34px;
              margin-left: 10px;
              width: 320px;
              height: 24px;
              font-size: 16px;
            }
          }
          .middleTags{
            height: 5%;
            padding-left: 10px;
            padding-right: 10px;
            display: inline-flex;
            .active{
              height: 90%;
              font-size: 20px;
              color: #9ce5f4;
              background: transparent;
              border: 5px;
            }
          }

          .middle-content-bottom {
            height: 25%;
            position: relative;
            .board{
              position: absolute;
              top:10px;
              left: 10px;
              width: 98%;
              height: 80%;
            }
          }
        }

        .right-content {
          flex:1 1 auto;
          flex-direction: column;
          width: 25%;
          height: 100%;
        }
      }
    }

    .decoration-content-bottom {
      display: flex;
      justify-content: space-between;

      .time-wrapper {
        font-size: 20px;
        padding: 8px;
      }
    }
  }
}
</style>
