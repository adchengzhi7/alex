// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueTypedJs from "vue-typed-js";

import VueAwesomeSwiper from "vue-awesome-swiper";
import VueMaterial from "vue-material";

// require styles
import "swiper/dist/css/swiper.css";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "sweetalert2/dist/sweetalert2.min.css";
import VueGallery from "vue-gallery";
import VueLazyLoad from "vue-lazyload";
import LightBox from "vue-image-lightbox";
import VueSweetalert2 from "vue-sweetalert2";
import axios from "axios";
import VueAxios from "vue-axios";
import BackToTop from "vue-backtotop";

Vue.use(BackToTop);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll']
})
Vue.use(VueMaterial);
Vue.use(VueAwesomeSwiper);
Vue.use(BootstrapVue);
Vue.use(VueTypedJs);
Vue.use(VueGallery);

Vue.config.productionTip = false;

require("./assets/css/all.css");
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App,
    LightBox
  },
  template: "<App/>"
});
