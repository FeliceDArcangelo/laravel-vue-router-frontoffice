<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      cocktail: null,
      store,
    };
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/cocktails/" + this.$route.params.id)
      .then((response) => {
        this.cocktail = response.data.results;
        console.log(response);
      });
  },
};
</script>

<template>
  <div>
    <div v-if="cocktail">
      <h3 class="text-danger">{{ cocktail.strDrink }}</h3>
      <img
        style="height: 400px; width: 400px"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
      <p class="mt-3">
        <strong>Instructions: </strong>{{ cocktail.strInstructions }}
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Category: {{ cocktail.strCategory }}</li>
        <li class="list-group-item">Glass type: {{ cocktail.strGlass }}</li>
        <li class="list-group-item">
          Alcoholic:
          <span v-if="cocktail.strAlcoholic === 'Alcoholic'">Yes</span>
          <span v-else>No</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style></style>
