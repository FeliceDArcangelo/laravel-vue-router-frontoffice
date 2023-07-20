<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img
      :src="cocktail.strDrinkThumb"
      class="card-img-top rounded-top"
      :alt="cocktail.strDrink"
      style="height: 250px"
    />
    <div class="card-body bg-black text-light">
      <h5 class="card-title">{{ cocktail.strDrink }}</h5>
      <p class="card-text">{{ cocktail.strInstructions }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-black text-light">Category: {{ cocktail.strCategory }}</li>
      <li class="list-group-item bg-black text-light">Glass type: {{ cocktail.strGlass }}</li>
      <li class="list-group-item bg-black text-light">
        Alcoholic:
        <span v-if="cocktail.strAlcoholic === 'Alcoholic'">Yes</span>
        <span v-else>No</span>
      </li>
    </ul>
    <div class="cocktail-body">
      <router-link
        class="btn btn-primary m-2"
        :to="{ name: 'cocktails.show', params: { id: cocktail.id } }"
        >View</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
