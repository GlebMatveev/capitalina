import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/forms",
      name: "forms",
      component: () => import("../views/FormsView.vue"),
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("../views/DocsView.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
