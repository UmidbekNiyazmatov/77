<template>
    <div class="modal-overlay  fixed bg-modalColor bottom-0 right-0 top-0 left-0 flex justify-center items-center z-10 " v-if="isOpen" 
    @click.self="closeModal"  >
        <div  class="modal-content bg-customWhite p-[10px] rounded-[8px] max-w-[450px] w-full relative m-3" >
            
            <div class=" p-5 w-full  ">
                <div class="flex items-center" >
                <h1 class="text-3xl py-3 w-full  ">
                  <b>
                    Добро пожаловать!
                  </b>
                </h1>
                
                <span @click="closeModal" class="icon-cancle text-3xl " ></span>
                
                </div>
                <p class="text-gray-500">
                  Войти в систему чтобы торговать в системе </p>
                <div class=" flex-col pt-5 pb-2  ">
                  <div class="pt-5">
                    <div>Логин</div>
                    <input type="text"  class=" mt-2 w-full  rounded-lg  border-2 p-3   bg-neutral-100" placeholder="Введите логин">
                  </div>
                  <div class="pt-5">
                    <div>Пароль</div>
                    <div class="flex pt-2 items-center relative  ">
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
                  <span class="p-3 w-full  text-red-600 ">
                    <hr>
                  </span>
                  <div class=" flex justify-center text-nowrap  text-sm text-gray-500 ">
                    Хотите стать продавцом?
                  </div>
                  <span class="p-3 w-full  ">
                    <hr>
                  </span>
                </div>
                <button class="flex justify-center rounded-xl w-full p-3 text-blue-500 border-2  border-blue-500   ">
                  Подать заявку
                </button>
              </div>
        </div>
    </div>
</template>

<script setup>

import { defineEmits , defineProps , watch } from 'vue';

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const closeModal = ()=> {
    emit("close")
};

const preventScroll = () => {
    document.body.style.overflow = "hidden"
};

const allowScroll = () => {
    document.body.style.overflow = ""
}

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) preventScroll();
        else allowScroll()
    }
);


</script>

<style scoped >

</style>