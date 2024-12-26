<script setup >
import { ref, watch, onMounted } from "vue";
import Products from "./Products-item.vue";
import SkeletonLoading from "../../ui/SkeletonLoading.vue";
import { card } from "@/data/uz";

const product = ref([]);
const loading = ref(false);

function loadProduct() {
  loading.value = true;
  setTimeout(() => {
    product.value = card.map((item) => ({
      id: item.id,
      name: item.title,
      country: item.country,
      time: item.time,
      number: item.number,
      price: item.price,
      img: item.image,
    }));
    loading.value = false;
  }, 1000);
}

onMounted(() => {
  loadProduct();
});
</script>
<template>
    <div class=" w-full  grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-5 max-sm:gap-x-5 "
          v-shov="!loading" >

          <Products v-for="item in product" :key="item.id" :item="item" />
        
    </div>
</template>

<style scoped>
</style>