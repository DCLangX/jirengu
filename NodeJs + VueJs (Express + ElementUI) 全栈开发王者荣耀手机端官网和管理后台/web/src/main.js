import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')