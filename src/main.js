import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("truncate", function(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
