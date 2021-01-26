<template>
  <div id="sensitive-data-view">
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
              <div class="main-left-content">
                <dv-border-box-3>
                  <div class="ml-top">
                    <left-top/>
                  </div>
                  <div class="ml-mid">
                    <left-mid/>
                  </div>
                  <div class="ml-bottom">
                    <rose-chart/>
                  </div>
                </dv-border-box-3>
              </div>
              <div class="main-right-content">
                <div class="mr-top">
                  <div class="chart-top">
                    <div class="chart-top-left">
                      <chart3/>
                    </div>
                    <div class="chart-top-right">
                      <chart4/>
                    </div>
                  </div>
                  <div class="chart-bottom">
                    <div class="chart-bottom-left">
                      <chart1/>
                    </div>
                    <div class="chart-bottom-right">
                      <chart2/>
                    </div>
                  </div>
                </div>
                <div class="mr-bottom">
                  <scroll-board/>
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
  import topHeader from './parts/topHeader'
  import redirectButton from './parts/redirectButton'
  import LeftTop from './parts/leftTop'
  import RoseChart from './parts/roseChart'
  import LeftMid from './parts/leftMid'
  import ScrollBoard from './parts/scrollBoard'
  import Chart1 from './parts/chart1'
  import Chart2 from './parts/chart2'
  import Chart3 from './parts/chart3'
  import Chart4 from './parts/chart4'

  export default {
    name: 'sensitiveDataView',
    components: {
      Chart4,
      Chart3,
      Chart1,
      Chart2,
      ScrollBoard,
      LeftMid,
      RoseChart,
      LeftTop,
      topHeader,
      redirectButton
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
    methods: {}
  }
</script>

<style lang="less">
#sensitive-data-view {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
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

        .main-left-content{
          position: relative;
          flex: 1 1 auto;
          flex-direction: column;
          width:30%;
          height:100%;

          .ml-top{
            height: 10%;
            width: 100%;
            padding-top: 30px;
          }

          .ml-mid {
            height: 40%;
            width: 100%;
          }

          .ml-bottom{
            height:45%;
            width: 100%;
          }
        }

        .main-right-content{
          width: 70%;
          height: 100%;
          .mr-top{
            height:70%;
            .chart-top,.chart-bottom{
              height: 50%;
              width:100%;
              display: flex;
              flex: border-box;
              .chart-top-left,.chart-top-right,.chart-bottom-left,.chart-bottom-right{
                width:50%;
                height:100%
              }
            }
          }
          .mr-bottom{
            height: 30%;
            width: 100%;
          }
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