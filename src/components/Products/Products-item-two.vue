<script setup>
import { defineProps, ref } from "vue";

import { useRouter } from "vue-router";

// Props aniqlash
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// Router bilan ishlash
const router = useRouter();

// Foydalanuvchi login holati
const isLoggedIn = ref(true);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

// Detallar sahifasiga o'tish
const goToDetails = (id) => {
  router.push(`/details/${id}`);
};

</script>


<template>
    <div>
        <div>
            <div class="" style="transform: translateY(45px) translateX(10px) ;  ">
                <button @click="toggleLogin">
                    <span v-if="isLoggedIn" class="  icon-like text-white text-2xl "></span>
                    <span v-else class="icon-liked  text-white text-2xl "> </span>

                </button>

            </div>

            <RouterLink to="/products/:id"  @click="goToDetails(item.id) ">
                <div class=" max-lg:hidden flex  h-full w-full  group hover:text-blue-500 ">

                    <img :src="item.img" alt="" class="rounded-l-xl w-[200px] " />
                    <div class=" w-full py-5 px-5   bg-white  rounded-r-xl ">
                        <div class="flex justify-between ">
                            <h1 class="text-lg max-sm:text-base  h-[80px] "><b> {{ item.name }} </b> </h1>
                            <div
                                class="p-2 max-w-28 h-10 flex justify-center rounded-lg bg-neutral-300 text-neutral-700">
                                {{
                                    item.country }} </div>
                        </div>
                        <p class="text-3xl text-black w-full max-sm:text-xl  max-xl:text-2xl "> <b> {{ item.price }}
                            </b>
                            <span class="text-xl max-sm:text-xs max-xl:text-sm text-blue-400">UZS</span>
                        </p>
                        <div class="flex  justify-between ">
                            <p class="text-neutral-400">{{ item.time }}</p>
                            <p class="text-neutral-400"> {{ item.number }} </p>
                        </div>
                    </div>
                </div>


                <div class="  hidden max-lg:flex     h-full w-full  group hover:text-blue-500 ">

                    <img :src="item.img" alt=" " class="rounded-l-xl w-[150px]  " />
                    <div class="py-2 pl-3 pr-1 w-full bg-white rounded-r-xl">
                        <div
                            class="p-1 max-w-28 flex justify-center rounded-lg bg-neutral-300 text-sm text-neutral-700">
                            {{
                                item.country }} </div>

                        <h1 class="text-lg max-sm:text-base h-[50px] "><b> {{ item.name }} </b> </h1>
                        <p class="text-neutral-400 text-sm ">{{ item.time }}</p>
                        <p class="text-neutral-400  text-sm "> {{ item.number }} </p>

                        <p class="text-3xl text-black w-full max-sm:text-xl  max-xl:text-2xl "> <b> {{ item.price }}
                            </b>
                            <span class="text-xl max-sm:text-xs max-xl:text-sm text-blue-400">UZS</span>
                        </p>

                    </div>
                </div>
            </RouterLink>
        </div>





    </div>

</template>
<style scoped></style>