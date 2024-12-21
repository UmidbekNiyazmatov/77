<script setup>
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
  <div class="bg-blue-50" >
    <div class="container w-full py-20">
      <div class="text-center">
        <h1 class="text-5xl">Объявления</h1>
        <p class="text-neutral-400">
          Выможете найти все категории, которые вам нужны от покупателя
        </p>
      </div>
      <div class="w-full flex-col justify-center">
        <div
          class="grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 max-sm:gap-x-5 "
          v-shov="!loading"
        >
          <Products v-for="item in product" :key="item.id" :item="item" />
        </div>
        <div
          class="grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5"
          v-shov="loading"
        >
          <SkeletonLoading type="product" v-for="i in 12" :key="i" v-show="loading" />
        </div>
      </div>

      <div class="flex justify-center mt-12  ">
        <button
          class="flex items-center border-4 p-5 gap-3 px-8 rounded-full max-sm:p-3 bg-neutral-300"
        >
          Загрузить больше
          <span class="icon-doubleDown"> </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
