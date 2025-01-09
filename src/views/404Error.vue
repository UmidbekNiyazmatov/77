<script setup>

</script>

<template>
    <div class="bg-gray-100  ">
        <div class="container  flex justify-center items-center h-full ">
            <div class=" text-center py-[200px]  ">
                <img src="/public/Error.png" alt="">
                <div class="py-10  ">
                    <h1 class="text-3xl  "><b> Страница, которую вы ищете, не найдена</b></h1>
                    <p>Нам жаль, но, похоже, мы потеряли эту страницу, но мы не хотим терять вас.</p>
                </div>
                <router-link to="/">
                    <button class="py-3 px-20 rounded-xl text-white bg-blue-500 ">
                        Вернуться на главную
                    </button>
                </router-link>
            </div>
        </div>
    </div>
   
</template>

<style></style>
