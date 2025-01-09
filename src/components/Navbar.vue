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


// const isRotated = ref(false);

const toggleRotate = () => {
  // isRotated.value = !isRotated.value;
  isDropdownOpen.value = !isDropdownOpen.value;
};



// Dropdown funksionallik
const isDropdownOpen = ref(false);

const currentLanguage = ref({
  name: "Русский",
  title: "Ру" ,
  flag: "/public/Language.png",
});

const languages = ref([
  {
    name: "Русский",
    title: "Ру" ,
    flag: "/public/Language.png",
  },
  {
    name: "O’zbekcha",
    title: "Uz" ,
    flag: "/public/uz.png",
  },
]);



const selectLanguage = (language) => {
  currentLanguage.value = language;
  isDropdownOpen.value = false;
};

</script>

<template>
  <div class=" bg-customWhite h-20  w-full">
    <div class="container relative flex w-full max-sm:px-2">
      <div class="flex justify-start  w-full">
        <div class="flex items-center gap-2">
          <div  class="  ">
            <div @click="toggleRotate" class="flex items-center gap-2" >
              <img :src="currentLanguage.flag" width="20px"  alt="flag" >
              <span class="max-sm:hidden">{{ currentLanguage.name }}</span>
              <span class="max-sm:flex hidden ">{{ currentLanguage.title }}</span>

              <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                class="icon-down mr-3 text-[8px] transition-transform duration-300 ease-in-out hover:border-blue-500 "></i>
            </div>
            <div v-if="isDropdownOpen " class="absolute left-2 mt-2 bg-white border rounded-lg shadow-lg z-10 w-auto">
              <div v-for="(language, index) in languages" :key="index" class=" flex items-center gap-2  px-4 py-2 cursor-pointer hover:bg-gray-100 "
                @click="selectLanguage(language)">
                <img :src="language.flag" alt="flag" class="w-5 h-5" />
                <span class="text-sm font-medium  " >{{ language.name }}</span>
                
              </div>
              
            </div>

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

<style scoped>

</style>
