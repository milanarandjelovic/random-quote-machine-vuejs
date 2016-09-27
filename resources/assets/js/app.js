import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './components/App.vue'

// Install some plugins
Vue.use(VueResource)

let vm = new Vue({
  el: 'body',
  components: { App }
})