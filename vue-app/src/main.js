import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueFormulate from '@braid/vue-formulate'

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
