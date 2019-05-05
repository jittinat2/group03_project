import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BracketGen from '@/components/BracketGen'

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
    }
  ]
})
