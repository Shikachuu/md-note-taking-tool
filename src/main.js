import Vue from 'vue';
import App from './App.vue';
import VueHighlightJS from "vue-highlightjs"; //https://www.npmjs.com/package/vue-highlightjs
import './registerServiceWorker';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
Vue.use(VueHighlightJS);
