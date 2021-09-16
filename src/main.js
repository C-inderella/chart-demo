import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 按需加载 echarts 图表资源
// import echarts from "echarts";
// import "echarts/lib/chart/bar";
// import "echarts/lib/chart/line";
// // 按需加载 echarts 工具组件
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";
// import "echarts/lib/component/legend";

// import PagodaCharts from "pagoda-charts";

// Vue.config.productionTip = false;

// Vue.use(PagodaCharts, {
//   echarts,
// });
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
