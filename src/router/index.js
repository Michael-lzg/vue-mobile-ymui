import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {keepAlive: true},
      component: (resolve) => {
        require(['../views/index'], resolve)
      }
    },
    {
      path: '/dialog',
      name: 'dialog',
      meta: {keepAlive: false},
      component: (resolve) => {
        require(['../views/dialog'], resolve)
      }
    }
  ]
})

export default router
