<template>
    <div class="list" :storeId="data.storeId" @click="listDetail(data.storeId)">
        <div>{{data.storeName}}</div>
        <div class="turnover-area" @click.stop="gotoChartDetail(data.storeId)">
            <div class="turnover" :class="data.style.turnover">{{data.turnoverName}}{{data.turnover}} </div>
            <span class="turnover-grew" :class="data.style.turnoverGrew">{{data.turnoverGrew}}</span>
            <span class="turnover-rate" :class="data.style.turnoverRate">{{data.turnoverRate}}</span>
        </div>
        <div class="turnover-area" @click.stop="gotoChartDetail(data.storeId)">
            <div class="turnover" :class="data.style.comming">{{data.commingName}}{{data.comming}}</div>
            <span class="turnover-grew" :class="data.style.commingGrew">{{data.commingGrew}}</span>
            <span class="turnover-rate" :class="data.style.commingRate">{{data.commingRate}}</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    gotoChartDetail(storeId){
        console.log(storeId)
        if(storeId != undefined){
            this.$router.push(`/bar/${storeId}`)
        }
    },
    listDetail (storeId) {
        this.$emit('listDetail', storeId)
    }
  }
}
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
.list {
  width: 10rem;
  display: flex;
  align-items: center;
  background-color: #0a1629;
  color: #fff;
  padding: 0.1333rem 0;
  font-size: 0.32rem;
  border-bottom: 0.02rem solid #ccc;
}
.list > div {
  width: 33.3%;
}
.turnover-area {
  padding: 0 0.0667rem;
}
.turnover,.turnover-grew,.turnover-rate {
  color: #fff;
  border-radius: 0.12rem;
  padding-right: 0.0667rem;
  box-sizing: border-box;
  font-weight: bold;
}
.turnover{
  text-align: right;
  font-weight: bold;
}
.turnover-grew,.turnover-rate {
  display: inline-block;
  width: 48%;
}
.turnover-rate {
  margin: 0.0667rem 0 0.0667rem 0.0667rem;
}
</style>