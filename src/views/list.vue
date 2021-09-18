<template>
  <div class=""  :style="{'paddingTop': listTop}">
    <div class="query-area" v-show="!isScrollTabsHeight">
      <div class="query-line">
        <div>
          <span>日期：</span> <input type="date" name="query-date" />
        </div>
        <div>
          <span>店名：</span> <input type="text" name="query-store-name" />
        </div>
      </div>
      <div class="query-line">
        <div>
          <span>地区：</span>
          <select>
            <option 
              v-for="(item, index) in queryArea"
              :key="index"
              :value ="item.key"
            >{{ item.lineVal }}</option>
          </select>
        </div>
        <div>
          <span>行数：</span>
          <select>
            <option 
              v-for="(item, index) in queryLine"
              :key="index"
              :value ="item.key"
            >{{ item.lineVal }}</option>
          </select>
        </div>
        <div class="queryButton color-blue">查询</div>
      </div>
    </div>
    <div class="tabs-card"
      ref="tabs"
      :class="[isScrollTabsHeight ? 'fix-tabs' : '']">
      <pagoda-tabs type="card" color="#3f8cef">
        <pagoda-tab title="日"></pagoda-tab>
        <pagoda-tab title="周"></pagoda-tab>
        <pagoda-tab title="月累计"></pagoda-tab>
        <pagoda-tab title="年累计"></pagoda-tab>
      </pagoda-tabs>
    </div>
    <div class="list-area">
      <list-item :data="listAvg" @listDetail="listDetail"></list-item>
      <list-item :data="listSort" @listDetail="listDetail"></list-item>
      <div ref="listTitle"
        :class="[isScrollTitleHeight ? 'fix-title' : '']"
        :style="{'top': isScrollTitleHeight ? `${tabsHeight}px` : ''}">
        <list-item :data="listTitle"></list-item>
      </div>
      <!-- <div>**************</div> -->
      <ul>
        <li v-for="(item, index) in statisticsList"
            :key="index">
            <list-item :data="item" @listDetail="listDetail"></list-item>
        </li>
      </ul>
    </div>
    <div 
      v-if="isShowItemDetail"
      class="item-detail-area"
      @click="isShowItemDetail = false"
    >
      <ul class="item-detail-content">
        <li><div>门店id</div><div>1</div></li>
        <li><div>营业额</div><div>111</div></li>
        <li><div>同比增长</div><div>222</div></li>
        <li><div>翻台率</div><div>333</div></li>
        <li><div>来客量</div><div>444</div></li>
        <li><div>同比增长</div><div>555</div></li>
        <li><div>平均客单</div><div>666</div></li>
      </ul>
    </div>
  </div>
</template>
<script>
import listItem from './components/listItem'
export default {
  components: {
    listItem
  },
  data() {
    return {
      scrollTop: 0,
      isScrollTabsHeight: false, // 是否滚动到选项卡
      isScrollTitleHeight: false, // 是否滚动到列表title
      tabsh: 0, // 选项卡高度
      tith: 0, // 列表title高度
      tabsHeight: 0,
      titleHeight: 0,
      isShowItemDetail: false,
      active: 2,
      queryArea: [
        {key: '1', lineVal: '全部'},
        {key: '2', lineVal: '深圳'},
        {key: '3', lineVal: '广州'},
        {key: '4', lineVal: '杭州'},
      ],
      queryLine: [
        {key: '1', lineVal: '前100名'},
        {key: '2', lineVal: '后100名'},
      ],
      listAvg: {
        style: {
          turnover: 'color-red',
          turnoverGrew: 'color-red',
          turnoverRate: 'color-red',
          comming: 'color-red',
          commingGrew: 'color-red',
          commingRate: 'color-blue'
        },
        storeName: '日平均',
        turnoverName: '日均总营业额 <br>',
        turnover: 111,
        turnoverGrew: 222,
        turnoverRate: 333,
        commingName: '日均总来客量 <br>',
        comming: 444,
        commingGrew: 555,
        commingRate: 666
      },
      listSort: {
          style: {
            turnover: 'color-red',
            turnoverGrew: 'color-red',
            turnoverRate: 'color-red',
            comming: 'color-red',
            commingGrew: 'color-red',
            commingRate: 'color-blue'
          },
          storeName: '85',
          turnoverName: '日均总营业额 <br>',
          turnover: 111,
          turnoverGrew: 222,
          turnoverRate: 333,
          commingName: '日均总来客量 <br>',
          comming: 444,
          commingGrew: 555,
          commingRate: 666
      },
      listTitle: {
        style: {
          turnover: 'color-yellow',
          turnoverGrew: 'color-yellow',
          turnoverRate: 'color-yellow',
          comming: 'color-yellow',
          commingGrew: 'color-yellow',
          commingRate: 'color-yellow'
        },
        storeName: '店名',
        turnover: '营业额',
        turnoverGrew: '同比增长',
        turnoverRate: '翻台率',
        comming: '来客量',
        commingGrew: '同比增长',
        commingRate: '平均客单'
      },
      statisticsList: Array.from({ length: 20 }, (v,i) => ({
          style: {
            turnover: 'color-red',
            turnoverGrew: 'color-red',
            turnoverRate: 'color-green',
            comming: 'color-red',
            commingGrew: 'color-red',
            commingRate: 'color-blue'
          },
          storeId: i,
          storeName: '深圳软件园'+i,
          turnover: 111,
          turnoverGrew: 222,
          turnoverRate: 333,
          comming: 444,
          commingGrew: 555,
          commingRate: 666
      }))
    };
  },
  methods: {
    onConfirm(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      // Toast('取消');
    },
    handleScroll () {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      this.tabsh = this.$refs.tabs.offsetTop
      this.tith = this.$refs.listTitle.offsetTop

      // console.log(this.scrollTop, this.tabsHeight, this.tabsh, this.tith)

      if(this.scrollTop > this.tabsh){
        this.isScrollTabsHeight = true
        // console.log('超过某 高度')
      }else{
        this.isScrollTabsHeight = false
      }
      if(this.scrollTop + this.tabsHeight > this.tith){
        this.isScrollTitleHeight = true
        // console.log('超过顶部+tabs 高度')
      }else{
        this.isScrollTitleHeight = false
      }
    },
    listDetail(storeId){
      console.log(storeId,'查看列表详情')
      this.isShowItemDetail = true
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll,true)
    this.$nextTick( () => {
      // console.log(this.$refs.tabs.offsetHeight, '-----tabs-offsetHeight')
      this.tabsHeight = this.$refs.tabs.offsetHeight
      this.titleHeight = this.$refs.listTitle.offsetHeight

    })
  },
  computed:{
    // 列表距顶部高度
    listTop () {
      if (this.isScrollTabsHeight && this.isScrollTitleHeight) {
        return `${this.titleHeight + this.tabsHeight + this.titleHeight}px`
      }else if (this.isScrollTabsHeight) {
        return `${this.tabsHeight + this.tabsHeight}px`
      }else {
        return ``
      }
    }
  },
  watch: {},
  beforeDestroy () {
    window.removeEventListener("scroll", this.handleScroll,true)
  },
};
</script>
<style scoped>
.color-red {
  background-color: #e34c4b;
}
.color-yellow {
  background-color: #ffcd5b;
}
.color-green {
  background-color: #00a365;
}
.color-blue {
  background-color: #3f8cef;
}
input,select{
  width: 2.8rem;
}
.query-area{
  text-align: left;
  margin: 0.2667rem 0;
}
.query-line>div{
  display: inline-block;
  margin-right: 0.2667rem;
  font-size: 0.2933rem;
}
.queryButton{
  color: #fff;
  display: inline-block;
  border-radius: 0.1333rem;
  padding: 0.08rem 0.2667rem;
  margin-left: 0.4rem;
}
.tabs-card{
  width: 10rem;
  padding: 0.5rem 0 0.1333rem 0;
}
.fix-tabs{
  position: fixed;
  top: 0;
  background: rgba(0,0,0,0.7);
}
.fix-title{
  position: fixed;
}
.fix-title /deep/ .list{
  border-bottom: none !important;
  background: rgba(0,0,0,0.7);
}
.item-detail-area{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
.item-detail-content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.item-detail-content>li{
  display: flex;
  justify-content: center;
}
.item-detail-content>li:nth-last-of-type(1){
  border-bottom: 0.0267rem solid #333;
}
.item-detail-content div{
  border: 0.0267rem solid #333;
  border-bottom: none;
  height: 1.5rem;
  line-height: 1.5rem;
}
.item-detail-content div:nth-of-type(1){
  border-right: none;
  width: 2rem;
}
.item-detail-content div:nth-of-type(2){
  width: 7rem;
}
</style>
