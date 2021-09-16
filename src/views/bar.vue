<template>
  <div class="EchartPractice">
    <div id="line"></div>
    <div id="bar2"></div>
    <div id="bar"></div>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/grid";
import "echarts/lib/component/legend";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";

export default {
  name: "EchartPractice",
  methods: {
    drawChart() {
      let myEchart = echarts.init(document.getElementById("main"));
      let option = {
        title: {
          text: "柱状图",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["苹果", "香蕉", "橘子", "葡萄", "caomei"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [50, 60, 45, 30, 120],
          },
        ],
      };
      myEchart.setOption(option);
    },
    drawBar() {
      let myChart = echarts.init(document.getElementById("bar"));
      let option = {
        title: {
          text: "柱状图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2011年", "2012年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            stack: "total",
          },
        ],
      };
      myChart.setOption(option);
    },
    drawBar2() {
      let myChart = echarts.init(document.getElementById("bar2"));
      let option = {
        title: {
          text: "柱状图堆叠",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          icon: "rect", //形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 5, // 设置间距
          align: "left",
          show: true,
          left: "right", //位置
          data: [
            "Direct",
            "Mail Ad",
            "Affiliate Ad",
            "Video Ad",
            "Search Engine",
          ],
          textStyle: {
            //文字样式
            color: "#9b9fae",
            fontSize: "12",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "Mail Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Affiliate Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "Search Engine",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      myChart.setOption(option);
    },
    drawLine() {
      let myChart = echarts.init(document.getElementById("line"));
      let option = {
        title: {
          text: "折线图堆叠",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          icon: "roundRect", //形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 10, // 设置间距
          align: "left",
          show: true,
          left: "right", //位置
          textStyle: {
            //文字样式
            color: "#9b9fae",
            fontSize: "12",
          },
          data: ["111", "222", "333"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "111",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
          },
          {
            name: "222",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
          },
          {
            name: "333",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
    this.drawBar();
    this.drawBar2();
    this.drawLine();
  },
};
</script>

<style scoped>
#main {
  width: 350px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
}
#bar {
  width: 350px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
}
#bar2 {
  width: 350px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
}
#line {
  width: 350px;
  height: 400px;
  margin: auto;
}
</style>
