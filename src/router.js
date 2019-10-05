import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import People from './views/People.vue'
import Women from './views/Women.vue'
import Men from './views/Men.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/peoples/:species/:id',
      name: 'people',
      component: People
    },
    {
      path: '/women',
      name: 'women',
      component: Women
    },
    {
      path: '/men',
      name: 'men',
      component: Men
    }
  ]
})
