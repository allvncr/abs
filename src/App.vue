<template>
  <Navbar />
  <RouterView />
  <SocialBar />
  <FooterBar />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import FooterBar from "./components/FooterBar.vue";
import SocialBar from "./components/SocialBar.vue";
</script>

<style scoped></style>
