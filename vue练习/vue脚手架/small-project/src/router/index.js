import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'


Vue.use(router)

export default new router({
  routes: [{
    name:'helloworld',
    path: '/helloworld/:wordmsg', //指定要跳转的路径
    component: HelloWorld //指定要跳转的组件
  },{
    name:'helloearth',
    path: '/helloearth/:earthmsg', //指定要跳转的路径
    component: HelloEarth //指定要跳转的组件
  }]
})
