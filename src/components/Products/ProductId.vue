<script setup>
import { ref, onMounted } from "vue";
import Products from "./ProductsId-item.vue";
import { useRoute, useRouter } from "vue-router";
import { card } from "@/data/uz"; // Mahsulotlar ro'yxati

// Router va parametrlar
const route = useRoute();
const router = useRouter();

// Parametrdan ID olish
const id = route.params.id;

// Mahsulot va yuklash holatini saqlash
const product = ref(null);
const loading = ref(true);

// Mahsulotni yuklash
function loadProduct() {
  loading.value = true;

  // ID bo'yicha mahsulotni topish
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
    // Agar mahsulot topilmasa, ortga qaytish
    router.push("/"); // Asosiy sahifaga qaytish
  }

  loading.value = false;
}

// Sahifa yuklanganda mahsulotni yuklash
onMounted(() => {
  loadProduct();
});
</script>

<template>
  <div v-if="loading" class="text-center">
    <p>Loading...</p>
  </div>

  <div v-else>
    <!-- Agar mahsulot topilsa -->
    <Products v-if="product" :item="product" />

    <!-- Agar mahsulot topilmasa, foydalanuvchi asosiy sahifaga qaytadi -->
  </div>
</template>

<style scoped></style>