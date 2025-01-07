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
          path: '/products',
          name: 'protucts',
          meta:{
            layout: "default",
          },
          component:() => import("@/views/ProductsPage.vue")
        },
        {
          path: "/details/:id",
          name: "ItemDetails",
          meta:{
            layout: "default"},
          component: () => import("../views/ProductsIdPage.vue"),
          props: true,
        },
       
        {
          path: '/:catchAll',
          name: 'Not-Found',
          meta:{
            layout: "empty",
          },
          component:() => import("@/views/404Error.vue")
        },
    
  ],
});

export default routes;
