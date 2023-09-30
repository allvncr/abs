<template>
  <div id="#app">
    <Navbar />
    <RouterView />
    <SocialBar />
    <FooterBar />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import FooterBar from "./components/FooterBar.vue";
import SocialBar from "./components/SocialBar.vue";
</script>

<style scoped></style>
