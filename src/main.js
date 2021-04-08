import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "@/components/About";
import Home from "@/components/Home";
import Contact from '@/components/Contact'
import User from '@/components/User'
import './assets/style.css'
Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/user/:id',
    component: User
  },
]

const router=new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  router:router,
  render: (h) => h(App),
}).$mount("#app");
