<template>
  <div class="left-chart-1">
    <div class="lc1-title">
      2020年交易总量
        <div class="card">7</div>
        <div class="card">4</div>
        <div class="card">5</div>
        <div class="card">3</div>
      万吨
    </div>
      <div class="lc1-header">同比增长<span>19%</span></div>
    <div class="lc1-title">
      2020年交易总额
        <div class="card">2</div>
        <div class="card">8</div>
        <div class="card">7</div>
        <div class="card">7</div>
      百万($)
    </div>
    <div class="lc1-header">同比增长<span>11.8%</span></div>
    <div class="lc1-title">
      9月交易总量
        <div class="card">9</div>
        <div class="card">7</div>
        <div class="card">6</div>
      万吨
    </div>
    <div class="lc1-header">同比增长<span>19.5%</span></div>
    <div class="lc1-title">
      9月交易总额
      <div class="card">3</div>
      <div class="card">7</div>
      <div class="card">4</div>
      <div class="card">8</div>
      百万($)
    </div>
    <div class="lc1-header">同比增长<span>17.8%</span></div>
  </div>
</template>

<script>
export default {
  name: 'risk-left-chart-1'
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  padding-top: 8px;

  .lc1-title {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 8px;
    padding-left: 8px;

    .card:first-child .card:last-child {
      margin-left: 8px;
    }

    .card {
      background-color: rgba(4, 49, 128, .6);
      color: #08e5ff;
      height: 35px;
      width: 35px;
      font-size: 25px;
      font-weight: bold;
      line-height: 35px;
      text-align: center;
      margin: 5px;
    }
  }

  .lc1-header {
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: rgba(255, 255, 255, .6);

    span {
      color: #08e5ff;
      font-weight: bold;
      font-size: 20px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
