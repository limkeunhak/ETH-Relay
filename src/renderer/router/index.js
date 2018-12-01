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
      path: '/runner',
      name: 'runner-page',
      component: require('@/components/RunnerView').default
    },
    {
      path: '/settings',
      name: 'setting-page',
      component: require('@/components/SettingView').default
    },
    {
      path: '/sysinfo',
      name: 'info-page',
      component: require('@/components/InfoView').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
