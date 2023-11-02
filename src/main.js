import Vue from 'vue'
import Vuetify from 'vuetify'
 
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import rest from '@/libs/Rest' /** Rest (Axios) API */
import storage from '@/libs/Storage' /** Web Storage API */
import auth from '@/libs/Auth' /** Authentication API */

/*const palettifyInstance = palettify().init({
  selector: '.image-list',
  eventTarget: '.hoverTarget', // Element to attach event listener to (mouseenter bt default).
  image: '.imageTarget', // Image target that we will be sampled for colors.
  styleTarget: '.imageTarget', // Element to attach the styles to. (optional) Defaults to image.
  staticStyles: {}, // Static styles to apply on plugin load
  dynamicStyles: {} // Dynamic styles to apply on each interaction
})*/

Vue.prototype.api = rest();
Vue.prototype.storage = storage;
Vue.prototype['$auth'] = auth;

import App from '@/App.vue'
import router from '@/routes'
import { store } from '@/store'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
