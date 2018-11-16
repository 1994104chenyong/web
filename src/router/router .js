import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/User/user.vue'
import order from '@/components/Ordergoods/ordergoods.vue'
import commondity from '@/components/Commondity/commondity.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/ordergoods',
      name: 'ordergoods',
      component: order
    },
    {
      path: '/commondity',
      name: 'commondity',
      component: commondity
    }
  ]
})
