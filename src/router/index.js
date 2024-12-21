import { createRouter, createWebHistory } from "vue-router"

const routes = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes: [
      
        {
          path: '/',
          name: 'home',
          meta:{
            layout: "default",
          },
          component:() => import("@/views/HomeView.vue")
        },
        {
          path: '/:catchAll',
          name: 'Not-Found',
          meta:{
            layout: "empty",
          },
          component:() => import("@/views/AboutView.vue")
        },
    
  ],
});

export default routes;
