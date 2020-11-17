import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-search-select/dist/VueSearchSelect.css'
import VueDraggable from 'vue-draggable'

Vue.config.productionTip = false

Vue.use(VueDraggable)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
