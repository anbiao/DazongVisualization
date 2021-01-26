<template>
  <page-layout :avatar="avatar">
    <div slot="headerContent">
      <div class="title">{{ timeFix }}，{{ nickname() }}<span class="welcome-text">，{{ welcome_msg }}</span></div>
      <div class="subtitle"> {{ currentProvince }} 清算中心当前状态总览 </div>
    </div>
    <div slot="extra">
      <a-row class="more-info">
        <a-col :span="8">
          <head-info title="平台总数" content="9" :center="false" :bordered="false"/>
        </a-col>
        <a-col :span="8">
          <head-info title="商品总类" content="24" :center="false" :bordered="false"/>
        </a-col>
        <a-col :span="8">
          <head-info title="风险事件" content="4" :center="false" />
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row :gutter="24">
        <!--   价格波动系数   -->
        <a-col :span="5" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="价格波动风险" :total="`${ riskRank[0] } / 10`">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <a-progress :stroke-color="strokeColor" :percent="riskRank[0] * 10" :height="12" status="active"/>
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                4.74%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                13.5%
              </trend>
            </template>
          </chart-card>
        </a-col>
        <!--   流动性风险   -->
        <a-col :span="5" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="流动性风险" :total="`${ riskRank[1] } / 10`">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <a-progress :stroke-color="strokeColor" :percent="riskRank[1] * 10" :height="12" status="active"/>
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                4.74%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                13.5%
              </trend>
            </template>
          </chart-card>
        </a-col>
        <!--   投机性风险   -->
        <a-col :span="5" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="投机性风险" :total="`${ riskRank[3] } / 10`">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <a-progress :stroke-color="strokeColor" :percent="riskRank[3] * 10" :height="12" status="active"/>
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                4.74%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                13.5%
              </trend>
            </template>
          </chart-card>
        </a-col>
        <!--   套期保值风险   -->
        <a-col :span="5" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="套期保值风险" :total="`${ riskRank[2] } / 10`">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <a-progress :stroke-color="strokeColor" :percent="riskRank[2] * 10" :height="12" status="active"/>
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                4.74%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                13.5%
              </trend>
            </template>
          </chart-card>
        </a-col>
        <!--   交易履约风险   -->
        <a-col :span="5" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="交易履约风险" :total="`${ riskRank[4] } / 10`">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <a-progress :stroke-color="strokeColor" :percent="riskRank[4] * 10" :height="12" status="active"/>
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                4.74%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                13.5%
              </trend>
            </template>
          </chart-card>
        </a-col>
      </a-row>

      <a-row :gutter="24">
        <!--   总销售额   -->
        <a-col :span="8" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="总交易额" total="￥1,246,560,000">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px;">
                <span slot="term">周同比</span>
                7.29%
              </trend>
              <trend flag="down">
                <span slot="term">日同比</span>
                4.5%
              </trend>
            </div>
            <template slot="footer">日均销售额<span>{{ '23456' | NumberFormat }}</span></template>
          </chart-card>
        </a-col>
        <!--   总成交量   -->
        <a-col :span="8" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="总成交量" :total="8846482742 | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px;">
                <span slot="term">周同比</span>
                7.29%
              </trend>
              <trend flag="down">
                <span slot="term">日同比</span>
                4.5%
              </trend>
            </div>
            <template slot="footer">日均成交量<span>{{ '23456' | NumberFormat }}</span></template>
          </chart-card>
        </a-col>
        <!--   总交易单数   -->
        <a-col :span="8" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="总交易单数" :total="656044738 | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px;">
                <span slot="term">周同比</span>
                7.29%
              </trend>
              <trend flag="down">
                <span slot="term">日同比</span>
                4.5%
              </trend>
            </div>
            <template slot="footer">日均交易交割数<span>￥{{ '23456' | NumberFormat }}</span></template>
          </chart-card>
        </a-col>
      </a-row>

      <a-row :gutter="24">
        <!--   接入清算所   -->
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="接入清算所" :total="cardCount.sp | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-bar :data-source="chartData.sp" :height="50"/>
            </div>
            <template slot="footer">今日新增清算所数：<span>{{ today.sp }}</span></template>
          </chart-card>
        </a-col>
        <!--   接入交易中心   -->
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="接入交易中心" :total="cardCount.jyzx | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-bar :datasource="chartData.jyzx" :height="50"/>
            </div>
            <template slot="footer">今日新增接入平台数：<span>{{ today.jyzx }}</span></template>
          </chart-card>
        </a-col>
        <!--   接入交易商   -->
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="接入交易商" :total="cardCount.jys | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-bar :datasource="chartData.jys" :height="50"/>
            </div>
            <template slot="footer">今日新增接入平台数：<span>{{ today.jys }}</span></template>
          </chart-card>
        </a-col>
        <!--   接入货仓数   -->
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="接入货仓数" :total="cardCount.cd | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-bar :data-source="chartData.cd" :height="50"/>
            </div>
            <template slot="footer">今日新增注册仓单数：<span>{{ today.cd }}</span></template>
          </chart-card>
        </a-col>
      </a-row>

      <a-card :loading="loading" :bordered="false" :body-style="{padding: '0', marginBottom: '24px'}">
        <div class="salesCard">
          <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
            <a-tab-pane loading="true" tab="总体交易额走势" key="1">
              <a-row>
                <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                  <bar title="总体交易额走势" :dataSource="p_moneyData" :height="340"/>
                </a-col>
                <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                  <rank-list title="交易额排行榜(交易中心)" :list="p_moneyList"/>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="总体成交量走势" key="2">
              <a-row>
                <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                  <bar title="总体成交量走势" :dataSource="p_volumeData" :height="340"/>
                </a-col>
                <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                  <rank-list title="成交量排行榜(交易中心)" :list="p_volumeList"/>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-card>

      <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
        <div class="salesCard">
          <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
            <a-tab-pane loading="true" tab="总体交易额走势" key="1">
              <a-row>
                <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                  <bar title="总体交易额走势" :dataSource="c_moneyData" :height="340"/>
                </a-col>
                <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                  <rank-list title="交易额排行榜(大宗商品分类)" :list="c_moneyList"/>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="总体成交量走势" key="2">
              <a-row>
                <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                  <bar title="总体成交量走势" :dataSource="c_volumeData" :height="340"/>
                </a-col>
                <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                  <rank-list title="成交量排行榜(大宗商品分类)" :list="c_volumeList"/>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-card>
    </div>
  </page-layout>
</template>

<script>
import ACol from "ant-design-vue/es/grid/Col"
import ATooltip from "ant-design-vue/es/tooltip/Tooltip"

import Bar from '@/components/chart/Bar'
import Trend from '@/components/Trend'
import MiniBar from '@/components/chart/MiniBar'
import RankList from '@/components/chart/RankList'
import HeadInfo from '@/components/tools/HeadInfo'
import ChartCard from '@/components/ChartCard'
import PageLayout from '@/components/page/PageLayout'
import MiniProgress from '@/components/chart/MiniProgress'

import { getLoginfo, getVisitInfo } from '@/api/api'
import { getFileAccessHttpUrl } from '@api/manage'

import { timeFix, welcome, getRandomArbitrary } from '@/utils/util'
import { mapGetters } from 'vuex'

const DataSet = require('@antv/data-set');

export default {
  name: "IndexOverview",
  components: {
    ATooltip,
    ACol,
    ChartCard,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    HeadInfo,
    PageLayout
  },
  data() {
    const platforms = [
      "临沂国际商品交易中心",
      "山东广丰橡胶轮胎交易中心",
      "牡丹国际商品交易中心",
      "日照大宗商品交易中心",
      "华东石油交易中心",
      "东亚畜牧现货产品交易所",
      "山东休斯顿石油装备交易中心",
      "国商商品交易中心",
      "威海国际海洋商品交易中心"
    ];

    const categories = [
      "农林牧渔",
      "能源化工",
      "金属矿石",
      "稀有金属",
      "文画古玩"
    ]
    const { data: p_moneyData, list: p_moneyList } = this.loadBarData(platforms)
    const { data: p_volumeData, list: p_volumeList } = this.loadBarData(platforms)

    const { data: c_moneyData, list: c_moneyList } = this.loadBarData(categories)
    const { data: c_volumeData, list: c_volumeList } = this.loadBarData(categories)

    return {
      timeFix: timeFix(),
      welcome_msg: welcome(),
      province: '',
      avatar: '',
      loading: true,
      riskRank: [],
      strokeColor: { '0%': '#17e910', '100%': '#f02700' },
      p_moneyData,
      p_moneyList,
      p_volumeData,
      p_volumeList,
      c_moneyData,
      c_moneyList,
      c_volumeData,
      c_volumeList,
      chartData: {
        cd: [],
        sp: [],
        jys: [],
        jyzx: []
      },
      cardCount: {
        cd: 100,
        sp: 87,
        jys: 15,
        jyzx: 9
      },
      today: {
        cd: 6,
        sp: 14,
        jys: 7,
        jyzx: 0
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo
    },
    currentProvince () {
      return this.$store.getters.province
    }
  },
  created() {
    this.user = this.userInfo
    this.avatar = getFileAccessHttpUrl(this.userInfo.avatar)
    setTimeout(() => {
      this.loading = !this.loading
    }, 1000)
    this.initLogInfo();
    this.randomRiskRank();
  },
  methods: {
    ...mapGetters(["nickname", "welcome"]),
    initLogInfo () {
      getLoginfo(null).then((res)=>{
        if(res.success){
          Object.keys(res.result).forEach(key=>{
            res.result[key] =res.result[key]+""
          })
          this.loginfo = res.result;
        }
      })
      getVisitInfo().then(res=>{
        if(res.success){
          this.visitInfo = res.result;
        }
      })
    },
    loadBarData(platforms) {
      const rankData = []
      const rankList = []
      platforms.forEach(platform => {
        let item1 = { name: platform }
        let item2 = { name: platform, total: 0 }
        for (let i = 0; i < 12; i += 1) {
          const randomData = getRandomArbitrary(900, 4000)
          item2.total += randomData
          item1[`${i + 1}月`] = randomData
        }
        rankData.push(item1)
        rankList.push(item2)
      });
      const dv = new DataSet.View().source(rankData);
      dv.transform({
        type: 'fold',
        fields: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        key: 'x',
        value: 'y',
      });
      return { data: dv.rows, list: rankList.sort(function(a, b){return b.total - a.total}) }
    },
    randomRiskRank() {
      for (const x of Array(5).keys()) {
        this.riskRank.push(getRandomArbitrary(2, 10))
      }
    }
  }
}
</script>

<style lang="less">
.ant-col-5 {
  width: 20%;
}

.circle-cust{
  position: relative;
  top: 28px;
  left: -100%;
}
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

.page-header {
  .headerContent {
    .subtitle {
      font-size: 1rem;
    }
  }
  .head-info {
    position: relative;
    text-align: left;
    padding: 0 32px 0 0;
    min-width: 125px;

    &.center {
      text-align: center;
      padding: 0 32px;
    }

    span {
      color: rgba(0, 0, 0, .45);
      display: inline-block;
      font-size: 1.25rem !important;
      line-height: 42px;
      margin-bottom: 4px;
    }

    p {
      line-height: 42px;
      margin: 0;
      a {
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }
}

.content {
  .chart-card-header {
    .meta {
      .chart-card-title {
        font-size: 1.15rem;
      }
    }
  }
}

.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;
  a {
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    font-size: 14px;
    margin-bottom: 13px;
    width: 25%;
  }
}

.item-group {
  .more-btn {
    margin-bottom: 13px;
    text-align: center;
  }
}

.list-content-item {
  color: rgba(0, 0, 0, .45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
}

@media only screen and (min-width: 1600px) {
  .list-content-item{
    margin-left:60px;
  }
}

@media only screen and (max-width: 1300px) {
  .list-content-item{
    margin-left:20px;
  }
  .width-hidden4{
    display:none
  }
}
.list-content-item{
  span{line-height: 20px;}
}
.list-content-item{
  p{margin-top: 4px;margin-bottom:0;line-height:22px;}
}
.anty-list-cust {
  .ant-list-item-meta{flex: 0.3 !important;}
}
.anty-list-cust {
  .ant-list-item-content{flex:1 !important; justify-content:flex-start !important;margin-left: 20px;}
}

.mobile {
  .headerContent .title .welcome-text {
    display: none;
  }
}
</style>