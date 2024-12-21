<script setup>

import { defineProps, ref, onMounted, watch } from "vue";


defineProps({
    item: {
        type: Object,
        required: true,
    },



})




const isLoggedIn = ref(true);


const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
};


</script>


<template>
<div>
    <div class="" style="transform: translateY(45px) translateX(10px) ;  ">
            <button @click="toggleLogin">
                <span v-if="isLoggedIn" class="  icon-like text-white text-2xl "></span>
                <span v-else class="icon-liked  text-white text-2xl "> </span>
                
            </button>
            
        </div>


    <div class="  h-full w-full  group hover:text-blue-500 ">
        
        <img :src="item.img" alt="" class="rounded-t-xl"  />
        <div class="py-5 pl-5 pr-1  bg-white  rounded-b-xl ">
            <div class="p-2 max-w-28  rounded-lg bg-neutral-300 text-neutral-700"> {{ item.country }} </div>

            <h1 class="text-lg max-sm:text-base  h-[80px] "><b> {{ item.name }} </b> </h1>
            <p class="text-neutral-400">{{ item.time }}</p>
            <p class="text-neutral-400"> {{ item.number }} </p>

            <p class="text-3xl text-black w-full max-sm:text-xl  max-xl:text-2xl "> <b> {{ item.price }} </b> <span class="text-xl max-sm:text-xs max-xl:text-sm text-blue-400">UZS</span>
            </p>

        </div>
    </div>
</div>
</template>
<style scoped></style>