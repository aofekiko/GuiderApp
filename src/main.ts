import Vue from "vue";
import App from "@/App.vue";
import { createApp, h } from "vue-demi";
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "windi.css";
import router from "@/router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = createApp({
  router,
  store, 
  render: () => h(App),
});

app.mount("#app");
