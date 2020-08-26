import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from "@/components/Login"
import Detail from "@/components/Detail"
import List from "@/components/List"
import PersInfo from "@/components/PersInfo"
import Search from "@/components/Search"
import Reg from "@/components/Reg";

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/persInfo',
      name: 'PersInfo',
      component: PersInfo
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
  ]
})
