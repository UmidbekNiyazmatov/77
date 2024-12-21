<script setup >
defineProps({
    type:String,
});
</script>
<template>
    <div>
      
        
        <div v-if="type ==='category'" class="flex items-center animate-pulse  ">
            <span class="bg-gray-100 rounded-xl border-[1px] w-[60px]  h-[63px] border-neutral-100 p-3" style="transform: translateX(30px);">
                
            </span>
            <button class="flex items-center rounded-xl border-[2px] border-gray-100 h-[85px] w-full ">
                <div class="flex-col justify-start text-start text-black pl-10 w-full">
                    <p class="bg-gray-100 rounded-lg w-24 py-2"> </p>
                    <p class="bg-gray-100 w-40 rounded-lg py-2 my-1"> </p>
                </div>
                <span class="flex justify-end bg-gray-100 rounded-lg p-2 mr-3"></span>
            </button>
        </div>

        <div v-if="type ==='product'"  class="   h-full w-full   ">
        
        <span  alt="" class="rounded-t-xl w-full h-full bg-neutral-500  " ></span>
        <div class="py-5 pl-5 pr-1 w-full  bg-neutral-500  rounded-b-xl ">
            <div class="p-2 max-w-28 bg-neutral-500  rounded-lg ">  </div>

            <h1 class="text-lg max-sm:text-base w-full h-[80px] bg-neutral-500"><b></b> </h1>
            <p class=" w-3/6 bg-neutral-500 "> </p>
            <p class=" w-3/6  bg-neutral-500"> </p>

            <p class="text-3xl  max-sm:text-xl  max-xl:text-2xl w-3/6 bg-neutral-500 "> <b>  </b> <span class="text-xl max-sm:text-xs max-xl:text-sm "></span>
            </p>

        </div>
    </div>

        
    </div>
</template>
<style scoped >
</style>