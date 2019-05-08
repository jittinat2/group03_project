import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BracketGen from '@/components/BracketGen'
import BracketPage from '@/components/BracketPage'
import SignUp from '@/components/signup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    },

    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },

  ]
})
