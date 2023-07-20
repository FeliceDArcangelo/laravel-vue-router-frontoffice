<script>
import axios from "axios";
import CocktailCard from "./CocktailCard.vue";
import { store } from "../store";

export default {
  components: { CocktailCard },
  data() {
    return {
      arrCocktails: [],
      currentPage: 1,
      nPages: 0,
      store,
    };
  },
  methods: {
    nextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
    },
    prevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
    },
    getCocktails() {
      axios
        .get(this.store.baseUrl + "api/cocktails", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrCocktails = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  created() {
    this.getCocktails();
  },
  watch: {
    currentPage() {
      this.getCocktails();
    },
  },
};
</script>

<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage == 1 }">
        <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
      </li>

      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <a class="page-link" href="#" @click.prevent="currentPage = page">{{
          page
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage == nPages }">
        <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </nav>

  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col mt-3" v-for="cocktail in arrCocktails" :key="cocktail.id">
        <CocktailCard :cocktail="cocktail" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
