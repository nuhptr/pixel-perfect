import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import ProductDetailView from "@/views/ProductDetailView.vue"
import CategoriesView from "@/views/CategoriesView.vue"
import PricingView from "@/views/PricingView.vue"
import StudyCaseView from "@/views/StudyCaseView.vue"
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"
import SuccessView from "@/views/SuccessView.vue"

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      { path: "/", name: "home", component: HomeView },
      { path: "/product-details/:id", name: "product-details", component: ProductDetailView },
      { path: "/categories", name: "categories", component: CategoriesView },
      { path: "/pricing", name: "pricing", component: PricingView },
      { path: "/study-case", name: "study-case", component: StudyCaseView },
      { path: "/login", name: "login", component: LoginView },
      { path: "/register", name: "register", component: RegisterView },
      { path: "/success", name: "success", component: SuccessView },
      // {
      //    path: "/about",
      //    name: "about",
      //    // route level code-splitting
      //    // this generates a separate chunk (About.[hash].js) for this route
      //    // which is lazy-loaded when the route is visited.
      //    component: () => import("../views/AboutView.vue"),
      // },
   ],
})

export default router
