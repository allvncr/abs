<template>
  <main>
    <h1 data-aos="fade-up" data-aos-delay="300">News</h1>
    <h4 data-aos="fade-up" data-aos-delay="500">Tous les posts (06)</h4>
    <div class="liste" data-aos="fade-up" data-aos-delay="1000">
      <router-link to="/blog/exemple" class="blog" v-for="i in 6" :key="i">
        <div class="header">
          <span class="icon"> P </span>
          <span>Patrick KOUADIO</span>
          <span>12 sept</span>
        </div>
        <h2>
          Décennie de Dévouement : L'association ABS Célèbre 10 Ans d'Impact
          Missionnaire
        </h2>
        <p>
          Nous sommes ravis de vous inviter à plonger dans une décennie de
          dévouement et de réalisations avec l'Association Missionnaire
          Chrétienne ABS. Cette année marque notre 10e anniversaire, une étape
          exceptionnelle dans notre voyage missionnaire. Au fil de cette
          décennie, nous avons été témoins de changements profonds dans la vie
          de nombreuses personnes, grâce à la lumière de l'espoir et de la foi
          que nous avons apportée. Depuis notre humble début en 2012 en tant que
          groupe d'amis partageant une vision missionnaire, nous avons évolué
          pour devenir une organisation dédiée à la réalisation de cette vision.
        </p>
        <div class="footer">
          <span>20 vues</span>
          <span>0 commentaire</span>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

const router = useRouter();

// Fonction pour mettre à jour le titre de la page
const updatePageTitle = () => {
  document.title = router.currentRoute.value.meta.title;
};

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

h4 {
  font-size: 14px;
  color: #254151;
  cursor: pointer;
}
.liste {
  @media screen and (max-width: 989px) {
    justify-content: space-between;
    gap: 16px 0;
  }
  margin: 32px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  .blog {
    @media screen and (max-width: 989px) {
      width: 45%;
    }
    @media screen and (max-width: 749px) {
      width: 100%;
    }
    width: 30%;
    border: 1px solid #b7c9d369;
    padding: 18px;
    color: inherit;

    h2 {
      font-size: 24px;
      font-weight: 500;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      margin-bottom: 24px;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 12px;
      font-weight: 300;

      .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 18px;
        background-color: #33691e;
        color: #fff;
        border-radius: 50%;
        line-height: 1;
      }
    }

    .footer {
      border-top: 1px solid #b7c9d369;
      padding: 15px 0;
      display: flex;
      gap: 16px;
      font-size: 12px;
      font-weight: 300;
    }
  }
}
</style>
