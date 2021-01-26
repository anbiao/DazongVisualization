<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'scrollBoard_sensitive',
  data () {
    return {
      config: {
        header: ['时间', '地区-平台', '大宗类别', '商品品种', '风险类型', '等级'],
        data: [
          ['2020-11-06', '华中地区-郑州商品交易所', '农林牧渔', '菜籽油', '仓单质押风险', '<div class="risk-rate lower">2</div>'],
          ['2020-11-05', '华北地区-大连商品交易所', '金属矿石', '铁矿石', '合同履约风险', '<div class="risk-rate lower">1</div>'],
          ['2020-11-04', '华南地区-海南大宗商品交易中心', '能源化工', '橡胶', '价格波动风险', '<div class="risk-rate lower">1</div>'],
          ['2020-11-02', '华南地区-海南大宗商品交易中心', '能源化工', '橡胶', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-11-02', '华南地区-海南大宗商品交易中心', '能源化工', '焦炭', '价格波动风险', '<div class="risk-rate middle">3</div>'],
          ['2020-10-27', '华东地区-牡丹国际交易所', '农林牧渔', '辣椒', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-10-24', '华东地区-牡丹国际交易所', '农林牧渔', '大蒜', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-10-22', '华北地区-大连商品交易所', '能源化工', '棕榈油', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-10-20', '华中地区-郑州商品交易所', '能源化工', '短纤', '价格波动风险', '<div class="risk-rate lower">1</div>'],
          ['2020-10-19', '华东地区-东亚畜牧产品交易所', '农林牧渔', '玉米', '价格波动风险', '<div class="risk-rate middle">3</div>'],
          ['2020-10-16', '华北地区-大连商品交易所', '能源化工', '石油', '价格波动风险', '<div class="risk-rate middle">3</div>'],
          ['2020-09-14', '华东地区-东亚畜牧产品交易所', '农林牧渔', '牛肉', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-09-03', '华东地区-牡丹国际交易所', '农林牧渔', '花生', '合同履约风险', '<div class="risk-rate lower">1</div>'],
          ['2020-08-19', '华东地区-东亚畜牧产品交易所', '农林牧渔', '猪肉', '价格波动风险', '<div class="risk-rate low">2</div>'],
          ['2020-07-10', '西南地区-西南大宗商品交易中心有限公司', '农林牧渔', '猪肉', '合同履约风险', '<div class="risk-rate lower">1</div>'],
          ['2018-08-15', '华南地区-日照大宗商品交易中心', '金属矿石', '钢坯', '合同履约风险', '<div class="risk-rate lower">1</div>']
        ],
        columnWidth: [185, 240,130,130,130,100],
        align: ['center', 'center', 'center', 'center', 'center', 'center'],
        waitTime: 4000,
        rowNum: 5,
        headerBGC: '#1981f6',
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    height: auto;
  }

  .ceil {
    color: #fff;
    font-weight: 400;

    .risk-rate {
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      text-align: center;
      border-radius: 10px;
      padding: 2px 6px;
      margin: 0 8px 4px 8px;
      font-size: 10px;
      font-weight: 800;
      line-height: 12px;
      color: #555;
    }
    .higher {
      background: rgb(251, 114, 147);
      border-color: rgb(251, 114, 147);
    }

    .high {
      background: rgb(255, 159, 127);
      border-color: rgb(255, 159, 127);
    }

    .middle {
      background: rgb(255, 219, 92);
      border-color: rgb(255, 219, 92);
    }

    .low {
      background: rgb(159, 230, 184);
      border-color: rgb(159, 230, 184);
    }

    .lower {
      background: rgb(55, 162, 218);
      border-color: rgb(55, 162, 218);
    }
  }
}
</style>
