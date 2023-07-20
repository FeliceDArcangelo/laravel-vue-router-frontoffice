<script>
import titleEx from "./components/titleEx.vue";
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    titleEx,
    AppNav,
    AppFooter,
  },
};
</script>

<template>
  <AppNav />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
body{
  background-color: black;
}
</style>
