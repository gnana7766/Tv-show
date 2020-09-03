import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Search from "../components/Search.vue";
import Tvshows from "../components/Tvshows.vue";
import Info from "../components/Info.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Tvshows",
    component: Tvshows,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
     path: "/search",
      component: Search,
       name: "search", 
       props: true 
    },
  { path: "/info",
   name: "info",
    component: Info
   },
  { path: "*",
   component: PageNotFound 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
