import { createRouter, createWebHistory } from "vue-router";

import CocktailList from "./components/CocktailList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/cocktails",
      name: "cocktails",
      component: CocktailList,
    },
  ],
});
