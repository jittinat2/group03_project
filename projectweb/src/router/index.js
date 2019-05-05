import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import BracketGen from '@/components/BracketGen'
import BracketPage from '@/components/BracketPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/BracketGenerator',
      name: 'BracketGen',
      component: BracketGen
    },
    {
      path: '/BracketPage',
      name: 'BracketPage',
      component: BracketPage
    }

  ]
})
