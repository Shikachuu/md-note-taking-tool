import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
Vue.config.productionTip = false;
import VueHtmlToPaper from "vue-html-to-paper";
const options = {
  name: '_blank',
  specs: [
    "fullscreen=yes",
    "scrollbars=yes"
  ],
  styles: [
    "https://unpkg.com/normalize.css@8.0.1",
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"
  ]
}
Vue.use(VueHtmlToPaper,options);
new Vue({
  render: h => h(App),
}).$mount('#app');
