import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/index.css"; // 全局样式
import "./rem.js";

import "pagoda-mobile/lib/toast/style";
import "pagoda-mobile/lib/table/style";
import "pagoda-mobile/lib/tab/style";
import "pagoda-mobile/lib/tabs/style";
import "pagoda-mobile/lib/picker/style";
import "pagoda-mobile/lib/button/style";

import { Toast } from "pagoda-mobile";
import { Table } from "pagoda-mobile";
import { Tab, Tabs } from "pagoda-mobile";
import { Picker } from "pagoda-mobile";
import { Button } from "pagoda-mobile";

Vue.use(Toast);
Vue.use(Table);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Picker);
Vue.use(Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
