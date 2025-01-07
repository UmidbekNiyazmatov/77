<script setup>

import { defineProps, ref, onMounted, watch } from "vue";

defineProps({
    item: {
        type: Object,
        required: true,
    },



});





const isLoggedIn = ref(true);


const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
};


</script>


<template>
    <div class="pb-40 max-sm:pb-20">
        
        <div class="py-10 max-sm:mx-5 max-sm:py-5 ">
            <span class="icon-arrow  hidden max-sm:flex " ></span>
            
            <div class="mt-0 max-sm:mt-5 ">Главная Электроника Фены <span class="text-gray-400" >457 147</span></div>
        </div>
        <div class="flex max-sm:flex-col  gap-8 ">
            <div class="w-3/4 max-sm:w-full ">

                <div class=" p-10  max-sm:p-4 bg-white  max-sm:rounded-none rounded-3xl ">
                    <img :src="item.img" alt="" class="rounded-xl w-full h-[500px] max-sm:h-[300px]" />
                    <div class="flex py-3 gap-3  " >
                        <img :src="item.img" class="max-sm:w-[90px] w-[200px]  rounded-3xl " alt="">
                        <img :src="item.img" class="max-sm:w-[90px] w-[200px]   rounded-3xl " alt="">
                        <img :src="item.img" class="max-sm:w-[90px] w-[200px]  rounded-3xl "   alt="">
                        <img :src="item.img" class="max-sm:w-[90px] w-[200px]  rounded-3xl "  alt="">
                        
                    </div>
                    <span class="text-neutral-400 text-xl max-sm:text-lg"> Электроника Фены</span>
                    <h1 class="text-3xl max-sm:text-2xl  h-[80px] "><b> {{ item.name }} </b> </h1>
                    <div class=" flex gap-5 pb-10 pt-5 max-sm:pb-5 ">
                        <div class="p-1 px-5 max-sm:px-2 flex justify-center rounded-lg bg-neutral-300 max-sm:text-base text-lg text-neutral-700">
                            {{
                                item.time }}
                        </div>
                        <div class="p-1 px-5  max-sm:px-2  flex justify-center rounded-lg bg-neutral-300 max-sm:text-base text-lg text-neutral-700">
                            {{
                                item.country }}
                        </div>
                    </div>

                    <div class="flex max-sm:flex-col justify-between">
                        <div class="text-4xl text-black   "> <b> {{ item.price }} </b>
                            <span class="text-2xl max-sm:text-2xl  text-blue-400">UZS</span>
                        </div>
                        <button
                            class=" flex items-center justify-center gap-3 p-3 px-8 bg-blue-500 max-sm:mt-5  text-lg text-white rounded-xl  ">
                            <span class="icon-phone  "></span>
                            <span>{{ item.number }}</span>
                        </button>
                    </div>
                </div>

                <div class=" bg-white p-10 max-sm:p-4 rounded-3xl max-sm:rounded-none my-6 ">
                    <h1 class="text-3xl max-sm:text-2xl "><b> Описание </b></h1>
                    <div class="text-xl max-sm:text-base pt-5 ">
                        <p> Мультистайлер Dyson Airwrap Complete Long в цветe Vinca blue и Rose Бесплатная доставка по
                            ТАШКЕНТУ!!! 100% оригинал С новыми цилиндрами для завивки и волнения в обоих направлениях,
                            щетками для контроля и придания формы, а также многофункциональной сушилкой для
                            разглаживания
                            Coanda для сушки,разглаживания и сокрытия разлетающихся волос 3 В комплектацию входят 30-мм
                            цилиндрические насадки Airwrap для завивки, 40-мм цилиндрические насадки Airwrap для завивки
                        </p>
                        <p class="py-5"> Круглая щетка для создания объема, Мягкая щетка для выпрямления, Жесткая щетка
                            для выпрямление
                            Особенности фена В комплекте Чехол для хранения Термостойкий коврик Щетка для очистки Для
                            длинных до груди или более длинных волос. Пoдxoдит для разных типoв вoлoc.
                        </p>
                        <p> Сoздaние лoконoв и волн. Pазглаживaниe. Высушивaние вoлос. Без экстpeмальныx тeмперaтур. В
                            последней версии 2022 Года появились новые насадки, такие как: - обновлённый цилиндр для
                            завивки, предусматривающий поток воздуха в двух направлениях, то есть больше не нужно
                            переставлять насадки. По вопросам пишите в телеграм на номер
                        </p>
                    </div>
                </div>

                <div class="bg-white max-sm:hidden p-10 rounded-3xl max-sm:rounded-none">
                    <h1 class="text-3xl pb-5 "> <b> Продавец </b></h1>
                    <div class=" flex   items-center justify-between">
                        <div class="flex items-center gap-3" >
                            <div >
                                <img src="/public/Seller.png" class="rounded-lg w-[50px]  " alt="">
                            </div>
                            <div>
                                <div class="text-lg"><b> Малика Абдурахимова</b> </div>
                                <span class="text-gray-400"> ID: 1326547 </span>
                            </div>
                        </div>
                        <div class=" text-xl  ">
                            <b> {{ item.number }} </b>
                        </div>
                    </div>
                </div>
            </div>






            <div class="w-1/4 max-sm:w-full ">
                <div class=" bg-white p-5 rounded-3xl max-sm:rounded-none ">
                    <h1 class="text-3xl pb-5 hidden max-sm:flex "> <b> Продавец </b></h1>
                    <div>
                        <div class="flex items-center gap-3  ">
                            <div >
                                <img src="/public/Seller.png" class="rounded-lg w-[50px]  " alt="">
                            </div>
                            <div>
                                <div class="text-lg"><b> Малика Абдурахимова</b> </div>
                                <span class="text-gray-400"> ID: 1326547 </span>
                            </div>
                        </div>
                        <div class="max-sm:flex max-sm:justify-between "  >
                        <div class=" text-xl py-5 max-sm:text-lg max-sm:py-2  ">
                            <b> {{ item.number }} </b>
                        </div>
                        <button class=" bg-gray-200 max-sm:px-3 max-sm:text-base max-sm:w-auto  p-3 text-lg rounded-xl  w-full ">
                            <b> Все объявления </b>
                        </button>
                    </div>
                    </div>

                </div>
                <div class=" bg-white mt-5  rounded-3xl max-sm:rounded-none ">
                    <div class="p-5">
                        <h1 class="text-2xl border-b-2 max-sm:border-none py-3"><b> Местоположение</b></h1>

                        <div class="flex pt-5 text-xl max-sm:items-center max-sm:text-lg   ">
                            <span class="icon-location text-blue-500 text-2xl"></span>
                            <span>г.Ташкент, ул.Олмачи 1-й проезд 13 дом</span>
                        </div>
                    </div>
                    <img src="/public/Map.png" class="w-full p-[2px] rounded-b-3xl max-sm:rounded-none " alt="">

                </div>



                <div class="py-5 max-sm:px-5 ">
                    <button
                        class=" flex justify-center items-center gap-3  p-3 shadow-sm hover:bg-blue-100 bg-blue-50  text-blue-500 text-lg rounded-xl  w-full ">
                        <b  > Скачать в галерею </b><span class="icon-download text-2xl "></span>
                    </button>
                </div>


            </div>

        </div>





    </div>
</template>
<style scoped></style>