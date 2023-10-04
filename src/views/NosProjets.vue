<template>
  <main>
    <h1 data-aos="fade-up" data-aos-delay="300">Nos Projets</h1>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="image in images" :key="image.title">
        <img :src="image.url" :alt="image.title" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="image in images" :key="image.title">
        <img :src="image.url" :alt="image.title" />
      </swiper-slide>
    </swiper>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
//images
import social from "../assets/projets/social.png";
import construction from "../assets/projets/construction.png";
import formation from "../assets/projets/formation.png";
import evangelisation from "../assets/projets/evangelisation.png";
import soutien from "../assets/projets/soutien.png";

const router = useRouter();

// Fonction pour mettre à jour le titre de la page
const updatePageTitle = () => {
  document.title = router.currentRoute.value.meta.title;
};
const images = ref([
  {
    title: "social",
    url: social,
  },
  {
    title: "construction",
    url: construction,
  },
  {
    title: "formation",
    url: formation,
  },
  {
    title: "evangelisation",
    url: evangelisation,
  },
  {
    title: "soutien",
    url: soutien,
  },
]);

// Utilisez le hook onMounted pour mettre à jour le titre lors du chargement initial
onMounted(() => {
  updatePageTitle();

  // Initialisez AOS avec les options souhaitées
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<style lang="scss" scoped>
main {
  @media screen and (max-width: 989px) {
    margin-top: 0;
  }
  margin-top: 64px;
  padding: 15px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 700;
  color: #d55342;
  letter-spacing: 3px;
  padding: 12px 0 24px;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;

  img {
    max-width: 600px;
    height: auto;
    margin: auto;
  }
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
