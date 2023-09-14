import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ButtonView from "../views/ButtonView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/button",
      component: ButtonView,
    },
  ],
});

export default router;
