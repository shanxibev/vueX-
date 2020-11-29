import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const About= () => import(/* webpackChunkName: "about" */ '../views/About.vue');//路由懒加载,点击到的时候，在加载相应的组件
const Info= () => import(/* webpackChunkName: "about" */ '../views/Info.vue');

const Routa= () => import(/* webpackChunkName: "about" */ '../views/Childrouter/Routa.vue');
const Routb= () => import(/* webpackChunkName: "about" */ '../views/Childrouter/Routb.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about', 
    name: 'About',  
    component:About,
  },
  {
    path: '/info',
    name: 'Info', 
    component:Info,
    // redirect:"/routa",
    children:[
        { path:"/routa/:num",name:"routera",component:Routa },//:num来接收路由的传参
        { path:"/routb",name:"routerb",component:Routb }
      //  {path:"/info/routerb",name:"routerb",component:Routb}
    ]
  },
  // {
  //   path:"*",
  //   redirect:"/"
  // }//当打开不存在的页面的时候，  就去/页面，首页
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
