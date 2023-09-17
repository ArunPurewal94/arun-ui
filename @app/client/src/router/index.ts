import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ButtonView from "../views/ButtonView.vue";
import CardView from "../views/CardView.vue";

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
    {
      path: "/card",
      component: CardView,
    },
  ],
});

export default router;
