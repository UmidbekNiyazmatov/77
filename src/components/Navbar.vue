<script setup>
import { ref } from 'vue';
import Modal from './Modal-login.vue';



const isOpenModal = ref(false)

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false
}


</script>

<template>
  <div class=" bg-customWhite h-20  w-full">
    <div class="container relative flex w-full max-sm:px-2">
      <div class="flex justify-start  w-full">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-2  ">
            <img src="/public/Language.png" alt="">
            <span class="max-sm:hidden">Русский</span>
            <span class="max-sm:flex hidden ">Pу</span>


            <span class="icon-down text-[8px]"></span>

          </div>
          <div class="flex items-center gap-2 group hover:text-blue-600 max-md:hidden lg:flex">
            <span class="icon-phone pl-2 group "> </span>
            +998 88 500 50 00
          </div>
        </div>
      </div>
      <div class="flex  justify-center w-full">
        <div class="  absolute ">
          <router-link to="/">
            <div class="bg-white shadow p-5 rounded-b-2xl max-sm:w-[150px] max-sm:px-3 max-md:w-[200px]  ">
              <img src="/public/logoNav.png" alt="">
            </div>
          </router-link>
        </div>
      </div>

      <div class="flex justify-end gap-3 w-full">
        <button class="flex items-center gap-2 group hover:text-blue-600">
          <span class="icon-like text-blue-600 max-sm:bg-slate-300 max-sm:p-2 max-sm:rounded-lg text-lg "> </span>
          <span class="max-md:hidden lg:flex"> Избранные </span>
        </button>
        <span class="flex items-center py-2 ">|</span>

        <button @click="openModal"
          class="  flex items-center bg-slate-300 max-md:px-2 py-2 px-6 my-5 p-3 rounded-lg gap-2">
          <span class="max-md:hidden lg:flex"> Войти </span>
          <span class="icon-exit text-lg "> </span>
        </button>
      </div>
    </div>

    <Modal :isOpen="isOpenModal" @close="closeModal" />
      

   



  </div>
</template>

<style scoped></style>
