<script setup>
import Defoult from "./layouts/defoult.vue";
import Empty from "./layouts/empty.vue";
import {useRoute } from "vue-router";
const layouts = {
  empty:Empty,
  default:Defoult,
};
const route = useRoute();

</script>

<template>
<div>
  <component :is="layouts[route.meta.layout]">
  <router-view />
  </component>
</div>

</template>

<style scoped>

</style>
