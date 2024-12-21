<script setup>
import { ref, onMounted } from "vue";

defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const isRotated = ref(false);

const toggleRotate = () => {
  isRotated.value = !isRotated.value;
};

;


</script>

<template>
    <div >
        <div @click="toggleRotate" class="flex items-center pr-5 group hover:text-blue-500 w-full ">
            <span class="bg-white group-hover:bg-blue-500 rounded-xl border-[1px] w-[60px] h-[63px] border-neutral-100 p-3 flex justify-center " style="transform: translateX(30px);">
                <span :class="item.icon" class="text-4xl  group-hover:text-white text-blue-500"></span>
            </span>
            <div class="flex items-center rounded-xl border-[2px] group-hover:border-blue-500 border-neutral-100 h-[85px] w-full">
                <div class="flex-col justify-start text-start text-black pl-10 w-full">
                    <b>{{ item.name }}</b>
                    <p class="text-neutral-400 w-full">{{ item.count }}</p>
                </div>
                <i :class="{ 'rotate-180': isRotated, 'rotate-0': !isRotated }" class="icon-down mr-3 text-[8px] transition-transform duration-300 ease-in-out"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-down {
    transition: transform 0.3s ease-in-out;
}
</style>
