import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import Edit from '@/components/Edit'
import Details from '@/components/Details'
import Info from '@/components/Info'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Customers},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: Details},
    {path: '/edit/:id', component: Edit},
    {path: '/about', component: About},
    {path: '/info', component: Info}
  ]
})
