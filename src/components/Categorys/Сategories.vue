<script setup>
import {ref, watch ,  onMounted } from "vue";
import Category from "./Categories-item.vue";
import SkeletonLoading from "../../ui/SkeletonLoading.vue"
import { data } from "@/data/uz.js";

const categories = ref([]);
const loading = ref(false);

function loadCategory() {
    loading.value = true; 

    setTimeout(() => {
        categories.value = data.map((item) => ({
        id: item.id,
        name: item.title,
        icon: item.icon,
        count: item.count+"объявлений",
    }));
    loading.value = false ; 
    },500);
}

onMounted(() => {
    loadCategory()
});

    



</script>

<template>
    <div class="bg-white  ">
        <div class="container w-full   bg-white  ">
            <div class="text-center  ">
                <div class="  flex justify-center " style="transform: translateY(-35px);">
                    <div class="relative flex items-center  " >
                    <span class="absolute left-[10px]  " >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.9265 17.0396L20.3996 20.3996M19.2796 11.4396C19.2796 15.7695 15.7695 19.2796 11.4396 19.2796C7.1097 19.2796 3.59961 15.7695 3.59961 11.4396C3.59961 7.1097 7.1097 3.59961 11.4396 3.59961C15.7695 3.59961 19.2796 7.1097 19.2796 11.4396Z"
                                stroke="#D5D8DB" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </span>
                    <input type="text" name="" id="" class="p-5 pl-10 rounded-lg w-[580px] max-sm:w-[400px] max-sm:p-3 max-sm:pl-10  border-2 "
                        placeholder=" Что вы ищите?">
                    <button class="bg-black text-white p-[14px] w-32 rounded-xl absolute  right-[10px]  max-sm:p-2 max-sm:w-24 "
                        >
                        Поиск
                    </button>
                </div>
            </div>
                <h1 class="text-5xl pb-5 "> Категории </h1>
                <p class="text-neutral-400"> Вы можете найти все категории, которые вам нужны от покупателя</p>
            </div>
            <div class="py-10" >
                <div class="grid  max-sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-10 gap-y-5  w-full "
                v-shov="!loading">
                    
                    <Category v-for="item in categories" :key="item.id" :item="item" />
                    
                </div>
                <div class="grid max-sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-10 gap-y-5  w-full "
                v-shov="loading" >

                    <SkeletonLoading 
                        type="category"
                        v-for="i in 12"
                        :key="i"
                        v-show="loading"
                    />
                </div>



            </div>
        </div>
    </div>

</template>

<style scoped></style>
