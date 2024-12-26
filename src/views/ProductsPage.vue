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
        <div class="container  w-full flex gap-6   ">
            <div class="w-2/5">
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
                            <div class="flex items-center relative ">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full ">  Парфюмерия </div>
                                 <i class="icon-down -rotate-90 mr-3 text-[8px] absolute right-1  transition-transform duration-300 ease-in-out "></i>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full ">Ноутбуки и планшеты </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Лицо </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Тело и ванна </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Макияж </div>
                            </div>
                            <div class="flex">
                                <input type="checkbox" class="w-5   ">
                                <div class="p-3 ml-3 pl-0 border-b-2 w-full "> Мужчинам </div>
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
            <div class="pb-20">
                <h1 class="text-5xl pb-10 "><b>Ноутбуки и планшеты </b></h1>
                <p class="text-gray-400  ">156 объявлений</p>
                <Products />
            </div>

        </div>
    </div>
</template>

<style scoped></style>
