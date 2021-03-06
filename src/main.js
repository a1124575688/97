import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = axios ;
Vue.prototype.qs = qs;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
