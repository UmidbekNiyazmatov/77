<script setup>
import { ref, onMounted } from "vue";
import Products from "./ProductsId-item.vue";
import { useRoute, useRouter } from "vue-router";
import { card } from "@/data/uz"; 


const route = useRoute();
const router = useRouter();


const id = route.params.id;


const product = ref(null);
const loading = ref(true);


function loadProduct() {
  loading.value = true;

  const foundProduct = card.find((item) => item.id === Number(id));
  if (foundProduct) {
    product.value = {
      id: foundProduct.id,
      name: foundProduct.title,
      country: foundProduct.country,
      time: foundProduct.time,
      number: foundProduct.number,
      price: foundProduct.price,
      img: foundProduct.image,
    };
  } else {

    router.push("/:catchAll"); 
  }

  loading.value = false;
}


onMounted(() => {
  loadProduct();
});
</script>

<template>
  <div v-if="loading" class="text-center">
    <p>Loading...</p>
  </div>

  <div v-else>

    <Products v-if="product" :item="product" />


  </div>
</template>

<style scoped></style>