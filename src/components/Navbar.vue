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
  <div class="bg-slate-50 h-20 mb-24 w-full">
    <div class="container relative flex w-full max-sm:px-2">
      <div class="flex justify-start  w-full">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-2  ">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5021 3.44922H1.49785C0.670586 3.44922 0 4.1198 0 4.94707V7.81703H20V4.94707C20 4.1198 19.3294 3.44922 18.5021 3.44922Z"
                fill="#F5F5F5" />
              <path
                d="M0 15.0536C0 15.8808 0.670586 16.5514 1.49785 16.5514H18.5021C19.3294 16.5514 20 15.8808 20 15.0536V12.1836H0V15.0536Z"
                fill="#FF4B55" />
              <path d="M20 7.81641H0V12.184H20V7.81641Z" fill="#41479B" />
            </svg>
            <span class="max-sm:hidden">Русский</span>
            <span class="max-sm:flex hidden ">Pу</span>


            <span class="icon-down text-[8px]"></span>

          </div>
          <div class="flex items-center gap-2 group hover:text-blue-600 max-md:hidden lg:flex">
            <span class="icon-phone pl-2"> </span>
            +998 88 500 50 00
          </div>
        </div>
      </div>
      <div class="flex  justify-center w-full">
        <div class="  absolute ">
          <router-link to="/">
            <div class="bg-white p-5 rounded-b-2xl max-sm:w-[150px] max-sm:px-3 max-md:w-[200px]  ">
              <svg width="100%" height="72" viewBox="0 0 138 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="138" height="72" rx="10" fill="#388FF3" />
                <rect x="6.5" y="6.5" width="125" height="59" rx="4.5" stroke="white" stroke-width="5" />
                <path d="M41.424 27.636L30.516 48.66H24L33.864 29.76H24V24H41.424V27.636Z" fill="white" />
                <path d="M61.8146 27.636L50.9066 48.66H44.3906L54.2546 29.76H44.3906V24H61.8146V27.636Z" fill="white" />
                <path
                  d="M66.0773 43.98C66.7013 43.428 67.4692 43.152 68.3812 43.152C69.2932 43.152 70.0612 43.428 70.6852 43.98C71.3332 44.532 71.6572 45.216 71.6572 46.032C71.6572 46.848 71.3332 47.532 70.6852 48.084C70.0612 48.636 69.2932 48.912 68.3812 48.912C67.4692 48.912 66.7013 48.636 66.0773 48.084C65.4533 47.532 65.1413 46.848 65.1413 46.032C65.1413 45.216 65.4533 44.532 66.0773 43.98Z"
                  fill="white" />
                <path
                  d="M93.8766 48.66H90.2046L89.7726 46.5C88.5486 48.108 86.6646 48.912 84.1206 48.912C81.5526 48.912 79.5966 48.108 78.2526 46.5C76.9086 44.892 76.2366 42.744 76.2366 40.056V30.66H81.8526V39.732C81.8526 42.228 82.9086 43.476 85.0206 43.476C87.1806 43.476 88.2606 42.192 88.2606 39.624V30.66H93.8766V48.66Z"
                  fill="white" />
                <path
                  d="M113.589 48.66H98.4694L98.5054 44.304L105.345 36.096H98.9734V30.66H113.265L113.229 35.016L106.389 43.224H113.589V48.66Z"
                  fill="white" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>

      <div class="flex justify-end gap-3 w-full">
        <button class="flex items-center gap-2 group hover:text-blue-600">
          <span class="icon-like  max-sm:bg-slate-300 max-sm:p-2 max-sm:rounded-lg text-lg "> </span>
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
    <Modal :isOpen="isOpenModal" @close="closeModal">
      <div class=" p- w-full">
        <h1 class="text-3xl py-3   ">
          <b>
            Добро пожаловать!
          </b>
        </h1>
        <p class="text-gray-500">
          Войти в систему чтобы торговать в системе </p>
        <div class=" flex-col pt-5 pb-2  ">
          <div class="pt-5">
            <div>Логин</div>
            <input type="text" class=" w-full  rounded-lg  border-2 p-3   bg-neutral-100" placeholder="Введите логин">
          </div>
          <div class="pt-5">
            <div>Пароль</div>
            <div class="flex  items-center relative  ">
              <input type="text" class=" w-full  rounded-lg  border-2 p-3   bg-neutral-100"
                placeholder="Введите пароль">
              <span class="icon-eye-closed absolute right-3 "></span>
            </div>
          </div>
        </div>
        <div class="text-blue-600">Забыли пароль?</div>
        <button class="flex justify-center rounded-xl w-full p-3 text-white  bg-blue-500 mt-10  ">
          Войти
        </button>
        <div class="flex w-full my-5 justify-center items-center ">
          <span class="p-3 w-[200px]  text-red-600 ">
            <hr>
          </span>
          <div class=" w-full text-sm text-gray-500 ">
            Хотите стать продавцом?
          </div>
          <span class="p-3 w-[200px]  ">
            <hr>
          </span>
        </div>
        <button class="flex justify-center rounded-xl w-full p-3 text-blue-500 border-2  border-blue-500   ">
          Подать заявку
        </button>
      </div>

    </Modal>

    <div class="w-full bg-gray-100 py-20 ">

    </div>


  </div>
</template>

<style scoped></style>
