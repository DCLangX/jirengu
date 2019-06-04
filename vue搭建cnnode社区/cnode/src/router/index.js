import Vue from 'vue'
import router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SildeBar from '../components/SildeBar'

Vue.use(router)

export default new router({
  routes: [{
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  }, {
    name: 'post_content',
    path: '/topic/:id&author=:name',
    components: {
      main: Article,
      sildebar: SildeBar
    }
  }, {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
      main: UserInfo
    }
  }]
})
