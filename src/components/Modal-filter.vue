<template>
  <div class="modal-overlay  fixed bg-modalColor bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000 " v-if="isOpen" @click.self="closeModal">
    <div class="modal-content bg-customWhite p-[10px] rounded-[8px] max-w-[450px] w-full relative m-3">

      <div class="   ">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl pb-3 "><b> Фильтр </b></h1>


          <span @click="closeModal" class="icon-cancle text-3xl "></span>

        </div>
        <div class="  bg-white rounded-xl  p-0    ">
                        
                        <div class=" ">
                            Регион
                            <div @click="toggleRotate"
                                class="  mt-2 mb-5 rounded-xl border-[2px] flex items-center  p-3 ">
                                <span class="w-full"> Самаркандская область </span>
                                <i :class="{ 'rotate-0': isRotated, '-rotate-90': !isRotated }"
                                    class="icon-down -rotate-90 mr-3 text-[8px]  transition-transform duration-300 ease-in-out "></i>
                            </div>

                            Район/город
                            <div @click="Rotate" class="  mt-2 mb-5 rounded-xl border-[2px] flex items-center  p-3 ">
                                <span class="w-full"> Все </span>
                                <i :class="{ 'rotate-0': Rotated, '-rotate-90': !Rotated }"
                                    class="icon-down -rotate-90 mr-3 text-[8px]  transition-transform duration-300 ease-in-out "></i>
                            </div>

                            Сортировать
                            <div class="flex">
                                <input type="radio" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Дешёвые сперва </div>
                            </div>
                            <div class="flex">
                                <input type="radio" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Дорогие сперва </div>
                            </div>
                            <div class="flex">
                                <input type="radio" class="w-5   ">
                                <div class="p-3 ml-3 pl-0  w-full "> Новые сперва </div>
                            </div>
                            <div class="py-3">
                                Подкатегории
                                <div class="flex">
                                    <input type="checkbox" class="w-5 border-r-2 ">
                                    <div class="p-3 ml-3 pl-0 border-b-2 w-full ">Все разделы</div>
                                </div>
                                <div class="flex relative ">
                                    <input type="checkbox" class="w-5   ">
                                    <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Парфюмерия </div>

                                    <i
                                        class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>

                                </div>
                                
                                <div class="flex relative">
                                    <input type="checkbox" class="w-5   ">
                                    <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Премиум </div>
                                    <i
                                        class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                                </div>
                                <div class="flex relative">
                                    <input type="checkbox" class="w-5   ">
                                    <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Мужчинам </div>
                                    <i
                                        class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                                </div>
                                <div class="flex relative">
                                    <input type="checkbox" class="w-5   ">
                                    <div class="p-3 ml-3 pl-0  w-full "> Женщинам </div>
                                    <i
                                        class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                                </div>
                               
                            </div>

                            <button class="flex justify-center rounded-lg  w-full p-3 text-white  bg-blue-500   ">
                                Применить фильтр
                            </button>
                        </div>
                    </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref,  defineEmits, defineProps, watch } from 'vue';

const isRotated = ref(false);

const toggleRotate = () => {
    isRotated.value = !isRotated.value;
};
const Rotated = ref(false)
const Rotate = () => {
    Rotated.value = !Rotated.value;
};

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const closeModal = () => {
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

<style scoped>



</style>