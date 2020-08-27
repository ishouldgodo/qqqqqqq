import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// 引入elementui
import ElementUI from "element-ui";
// 引入样似
import "element-ui/lib/theme-chalk/index.css";
// 使用
Vue.use(ElementUI);

import VueParticles from "vue-particles";
Vue.use(VueParticles);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
