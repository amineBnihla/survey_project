import {createRouter,createWebHistory} from "vue-router"
import store from "../store"


const routes = [
  {
    path:"/",
    redirect:"/dashboard",
    name:"Dashbaord",
    component: ()=> import("../components/DashboardLayout.vue"),
    children:[
      {
        path:"/dashboard",
        name:"Dashboard",
        component: ()=> import("../pages/dashboard.vue"),
      },
      {
        path:"/surveys",
        name:"Surveys",
        component: ()=> import("../pages/survey.vue"),

      }
    ],
    meta:{
      requireAuth:true
    }
  },
  {
    path:"/auth",
    redirect:"/login",
    name:"Auth",
    component: ()=> import("../components/AuthLayout.vue"),
    children:[
      {
        path:"/login",
        name:"Login",
        component: ()=> import("../pages/login.vue"),
     },
        {
        path:"/register",
        name:"Register",
        component: ()=> import("../pages/register.vue"),
     }
    ],
     meta:{
      requireAuth:false
    }
  },
  {
    path:"/register",
    name:"register",
    component: ()=> import("../pages/register.vue"),
     meta:{
      requireAuth:false
    }
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes:routes
})
router.beforeEach((to,from,next)=>{

 if(to.meta.requireAuth && !store.state.user.token){
  next('/login')
}else if(!to.meta.requireAuth && store.state.user.token){
   next('/')

 }
 next()
})
export default router
