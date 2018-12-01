import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/FrontView').default
    },
    {
      path: '/test',
      name: 'test-page',
      component: require('@/components/TestView').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
