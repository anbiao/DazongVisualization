<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'scrollBoard_notice',
  data () {
    return {
      config: {
        header: ['时间', '地区-平台', '公告', '公告类别'],
        data: [
          ['2020-11-17', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1532.html">2020年11月17日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-16', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1524.html">关于辣椒干2107、辣椒干2111现货合同上线的公告</a>', '其他'],
          ['2020-11-14', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1519.html">2020年11月14日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-14', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1517.html">关于LJ2011交收价公告</a>', '其他'],
          ['2020-11-14', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1516.html">关于DS2011交收价公告</a>', '其他'],
          ['2020-11-13', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1511.html">2020年11月13日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-11', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1499.html">2020年11月11日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-10', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1494.html">2020年11月10日DS2011仓单数量公告</a>', '其他'],
          ['2020-11-10', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1493.html">2020年11月10日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-10', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1489.html">关于DS2011商品合同下市通知</a>', '其他'],
          ['2020-11-10', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1488.html">关于LJ2011商品合同下市通知</a>', '其他'],
          ['2020-11-09', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1486.html">2020年11月9日LJ2011仓单数量公告</a>', '其他'],
          ['2020-11-07', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1479.html">关于提高DS2012履约订金的公告</a>', '其他'],
          ['2020-11-06', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1476.html">2020年11月6日DS2012仓单数量公告</a>', '其他'],
          ['2020-11-06', '华东地区-牡丹国际商品交易中心', '<a href="https://www.pibce.com/gonggao/1475.html">2020年11月6日LJ2011仓单数量公告</a>', '其他']
        ],
        columnWidth: [150, 240, 350, 100],
        align: ['center', 'center', 'center', 'center'],
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

  }
}
</style>
