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
        
            <div>
             
                <div class="  h-full w-full  group hover:text-blue-500 ">
                    <div class="rounded-t-xl w-full h-[200px] " ></div>
                    
                    <div class="py-5 pl-5 pr-1  bg-white  rounded-b-xl ">
                        <div class="p-2 max-w-28 flex justify-center rounded-lg bg-neutral-300 text-neutral-700">  </div>
            
                        <h1 class="text-lg max-sm:text-base  h-[80px] "><b> </b> </h1>
                        <p class="text-neutral-400"></p>
                        <p class="text-neutral-400"> </p>
            
                        <p class="text-3xl text-black w-full max-sm:text-xl  max-xl:text-2xl "> <b></b> <span class="text-xl max-sm:text-xs max-xl:text-sm text-blue-400"></span>
                        </p>
            
                    </div>
                </div>
            </div>
    </div>

        
    </div>
</template>
<style scoped >
</style>