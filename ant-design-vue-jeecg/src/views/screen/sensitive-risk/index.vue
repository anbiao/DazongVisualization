<template>
  <div id="sensitive-risk-view">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <div class="decoration-content-top">
          <dv-decoration-3 style="width:250px;height:30px;" />
          <redirect-button/>
          <dv-decoration-3 style="width:250px;height:30px;" />
        </div>
        <div class="decoration-content">
          <dv-border-box-11 title="交易风险智能分析与预警平台" :titleWidth=320 >
            <div class="content">
              <div class="left-chart-container">
                <dv-border-box-3>
                  <div class="left-chart-top">
                    <risk-left-chart-1 />
                  </div>
                  <div class="left-chart-bottom">
                    <Left-Chart-2 />
                  </div>
                </dv-border-box-3>
              </div>
              <div class="right-main-container">
                <div class="rmc-top-container">
                  <center-cmp />
                </div>
                <div class="rmc-bottom-container">
                  <risk-bottom-chart />
                </div>
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
import RiskLeftChart1 from './parts/LeftChart1'
import LeftChart2 from './parts/LeftChart2'
import CenterCmp from './parts/CenterCmp'
import RightChart2 from './parts/RightChart2'
import riskBottomChart from './parts/BottomCharts'
import topHeader from './parts/topHeader'
import redirectButton from './parts/redirectButton'

export default {
  name: 'sensitiveRiskView',
  components: {
    topHeader,
    redirectButton,
    RiskLeftChart1,
    LeftChart2,
    CenterCmp,
    RightChart2,
    riskBottomChart
  },
  data () {
    return {
      date: new Date(),
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
}
</script>

<style lang="less">
#sensitive-risk-view {
  position: relative;
  width: 100%;
  height:100%;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('img/bg.png');
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

        .left-chart-container {
          position: relative;
          flex: 1 1 auto;
          flex-direction: column;
          width:30%;
          height:100%;

          .left-chart-top{
            height: 40%;
            padding: 20px 24px;
          }
          .left-chart-bottom{
            height: 60%;
            padding: 20px 24px;
          }
        }

        .right-main-container {
          width: 70%;
          height: 100%;
          padding-left: 5px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;

          .rmc-top-container {
            width: 100%;
            height: 65%;
          }

          .rmc-bottom-container {
            width: 100%;
            height: 35%;
            display: flex;
            flex-direction: row;
          }
        }
      }
    }

    .decoration-content-bottom {
      display: flex;
      justify-content: space-between;

      .time-wrapper {
        font-size: 16px;
        padding: 4px;
      }
    }
  }
}
</style>
