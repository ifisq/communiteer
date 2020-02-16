// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
// import VueTailwindDatepicker from '@coding-wisely/vue-tailwind-datepicker'
import * as VueGoogleMaps from 'vue2-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShare, faEdit, faPenNib, faInfoCircle, faTrash, faHandsHelping, faUsers, faSeedling, faGlobeAmericas, faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Datetime } from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import '@/assets/css/tailwind.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'material-icons/css/material-icons.css'
import 'material-icons/iconfont/material-icons.css'

library.add(faShare, faEdit, faPenNib, faInfoCircle, faTrash, faHandsHelping, faUsers, faSeedling, faGlobeAmericas, faCompass)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable spaced-comment */

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDkO26iErNhfrgaH79UiMWPdQARc0YBx2I',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

Vue.use(VueSweetalert2)
Vue.use(Datetime)
// Vue.use(VueTailwindDatepicker)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
