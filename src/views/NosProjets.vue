<template>
  <main>
    <h1 data-aos="fade-up" data-aos-delay="300">Nos Projets</h1>
    <div class="container" data-aos="fade-up" data-aos-delay="1000">
      <Galleria
        :value="images"
        containerStyle="max-width: 640px;margin:auto;"
        :showItemNavigators="true"
        :circular="true"
        :numVisible="5"
      >
        <template #item="{ item }">
          <Image :src="item.url" :alt="item.title" imageStyle="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
          <img
            class="thumbnail"
            :src="slotProps.item.url"
            :alt="slotProps.item.title"
          />
        </template>
      </Galleria>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

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

.thumbnail {
  min-width: 120px;
  height: 100px;
}
</style>
