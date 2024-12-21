<script setup>

import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue"



</script>

<template>
  <div>
    <Navbar/>
    <slot/>
    <Footer/>
  </div>
<!--  
<div class="bg-slate-100"  >
    
    <Navbar/>
  
    
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>

    <Footer />
   
  </div> -->


</template>

<style scoped>

</style>