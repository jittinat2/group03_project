import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BracketGen from '@/components/BracketGen'
import CreateBracketPage from '@/components/CreateBracketPage'
import Login from '@/components/login'
import SignUp from '@/components/signup'
import HowTo from '@/components/howto'
import Forgot from '@/components/forgot'
import ResetPass from '@/components/resetpass'
import Profile from '@/components/profile'
import ShowBracketPage from '@/components/ShowBracketPage'
import Ji from '@/components/ji'


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
      path: '/CreateBracketPage',
      name: 'CreateBracketPage',
      component: CreateBracketPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/howto',
      name: 'HowTo',
      component: HowTo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/ShowBracketPage',
      name: 'ShowBracketPage',
      component: ShowBracketPage
    },
    {
      path: '/resetpass',
      name: 'ResetPass',
      component: ResetPass
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ji',
      name: 'Ji',
      component: Ji
    },
  ]
})
