<script setup>
import { ref, } from "vue";
import Products from '@/components/Products/Products-list.vue';

const isRotated = ref(false);

const toggleRotate = () => {
    isRotated.value = !isRotated.value;
};
</script>
<template>
    <div class="bg-gray-100">
        <div class="container    ">
            <div class="pb-8 " >
                Главная <span class="text-gray-400 pl-2 " >Рестораны и кафе</span>
            </div>
            <div class="w-full flex gap-6 ">
            <div class="w-3/12">
                <div class="w-full  bg-white rounded-xl  p-5    ">
                    <h1 class="text-2xl pb-5 "><b> Фильтр </b></h1>
                    <div class=" ">
                        Регион
                        <div class="  mt-2 mb-5 rounded-xl border-[2px] flex items-center  p-3 ">
                            <span class="w-full"> Самаркандская область </span>
                            <i
                                class="icon-down -rotate-90 mr-3 text-[8px]  transition-transform duration-300 ease-in-out "></i>
                        </div>

                        Район/город
                        <div class="  mt-2 mb-5 rounded-xl border-[2px] flex items-center  p-3 ">
                            <span class="w-full"> Все </span>
                            <i
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
                        <div class="py-5">
                            Подкатегории
                            <div class="flex">
                                <input type="checkbox" class="w-5 border-r-2 ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full ">Все разделы</div>
                            </div>
                            <div class="flex relative ">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full ">  Парфюмерия </div>
                                
                                 <i class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                                
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full ">Ноутбуки и планшеты </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Лицо </div>
                            </div>
                            <div class="flex relative">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Тело и ванна </div>
                                <i class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                            </div>
                            <div class="flex relative">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Макияж </div>
                                <i class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                            </div>
                            <div class="flex relative">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Мужчинам </div>
                                <i class="icon-down  absolute right-0 bottom-5 flex items-center mr-3 text-[8px]  "></i>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Женщинам </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Премиум </div>
                            </div>
                        </div>

                        <button class="flex justify-center rounded-lg  w-full p-3 text-white  bg-blue-500 mt-10  ">
                            Применить фильтр
                        </button>
                    </div>
                </div>
            </div>
            <div class=" w-9/12 pb-20">
                <h1 class="text-5xl  "><b>Ноутбуки и планшеты </b></h1>
                <div class="flex items-center  py-5 ">
                    <p class="text-gray-400  items-end w-full  ">156 объявлений</p>
                    <div class="flex justify-end gap-3  " >
                    <span class="icon-list text-3xl "  ></span>
                    <span class="icon-grid text-3xl text-blue-600 " ></span>
                </div>
            </div>
                
                
                <Products />
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped></style>
