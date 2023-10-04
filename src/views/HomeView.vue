<template>
  <section>
    <div class="container">
      <div class="carousel">
        <p>
          ...car tu as été immolé et tu as racheté pour Dieu, par ton sang, des
          hommes de toute tribu, de toute langue, de tout peuple et de toute
          nation.
        </p>
      </div>
    </div>

    <div class="container updown">
      <div class="col-7 grey">
        <h2>Notre Mission</h2>
        <p>
          Fédérer, mobiliser et organiser tous les moyens humains, matériels,
          technologiques, financiers et spirituels...afin de communiquer la Vie
          abondante par Jésus-Christ (à travers la diffusion du message de la
          bonne nouvelle de l’évangile) tout en répondant aux besoins d’ordre
          spirituel, moral, physique, matériel et financier de toute personne
          dans le besoin, sans distinction de race, de religion ou de
          confession.
        </p>
        <router-link to="/a-propos">Voir plus...</router-link>
      </div>
      <div class="col-5 red">
        <h2>Agir a nos cotés</h2>
        <router-link to="/nous-rejoindre">Soutenir</router-link>
      </div>
      <div class="col-7 green">
        <div class="div">
          <h2>A LA UNE</h2>
          <p>
            Célébrons une décennie d'engagement et d'impact ! Nous sommes ravis
            de vous inviter à une cérémonie extraordinaire pour célébrer notre
            10ème anniversaire...
          </p>
          <router-link to="/blog">Voir plus...</router-link>
        </div>
        <div class="image">
          <img src="../assets/hbd.webp" alt="nos10ans" />
        </div>
      </div>
      <div class="col-5 blue">
        <h2>Aider notre cause</h2>
        <router-link to="/dons">Faire un don</router-link>
      </div>
    </div>

    <div class="container projets">
      <h2>Nos Projects</h2>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/projets/construction.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/projets/evangelisation.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/projets/formation.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/projets/social.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/projets/soutien.png" />
        </swiper-slide>
      </swiper>
      <router-link to="/nos-projets">Voir tous nos projets</router-link>
    </div>

    <div class="container">
      <div class="bglayer">
        <span> DONNER POUR SOUTENIR LA MISSION</span>
        <router-link to="/dons">Faire un Don!</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const modules = [EffectCoverflow, Pagination];

// import required modules

const router = useRouter();

// Fonction pour mettre à jour le titre de la page
const updatePageTitle = () => {
  document.title = router.currentRoute.value.meta.title;
};

// Utilisez le hook onMounted pour mettre à jour le titre lors du chargement initial
onMounted(() => {
  updatePageTitle();
});
</script>

<style lang="scss" scoped>
section {
  @media screen and (max-width: 989px) {
    margin: 0;
    padding: 0 15px 64px;
  }
  display: block;
  background-color: #fff;
  // min-height: calc(100vh - 69px - 292px);
  padding-bottom: 64px;
}

.container {
  max-width: 1600px;
  @media screen and (max-width: 749px) {
    padding: 0;
  }
}

.carousel {
  @media screen and (max-width: 749px) {
    height: 300px;
    background-size: cover;
  }
  background-image: url(../assets/carousel.webp);
  height: 75vh;
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 30%;

  p {
    @media screen and (max-width: 749px) {
      width: 100%;
      font-size: 18px;
    }
    color: #fff;
    width: 50%;
    margin: auto;
    font-size: 32px;
    font-weight: 700;
    padding: 32px 0;
    letter-spacing: 1px;
  }
}

.updown {
  // margin-top: -200px;
  max-width: 1700px;
  display: flex;
  flex-wrap: wrap;

  .col-7 {
    @media screen and (max-width: 749px) {
      width: 100%;
      height: 300px;
      padding: 15px 0;
    }
    width: 60%;
    height: 408px;
  }
  .col-5 {
    @media screen and (max-width: 749px) {
      width: 100%;
      height: 300px;
      padding: 15px 0;
    }
    width: 40%;
    height: 408px;
  }
  .grey {
    @media screen and (max-width: 989px) {
      padding: 0 15px;
    }
    background-color: #eaeae8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    h2 {
      @media screen and (max-width: 749px) {
        font-size: 18px;
      }
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 700;
      color: #254151;
      margin-bottom: 12px;
    }

    p {
      @media screen and (max-width: 749px) {
        font-size: 12px;
      }
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 300;
    }

    a {
      color: #c36054;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .red {
    @media screen and (max-width: 989px) {
      padding: 0 15px;
    }
    background-color: #c36054;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    h2 {
      @media screen and (max-width: 749px) {
        font-size: 18px;
      }
      text-align: center;
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
    }

    a {
      text-transform: uppercase;
      font-weight: 600;
      background-color: #fff;
      padding: 8px 32px;
      color: #c36054;
      font-size: 14px;
      border-radius: 25px;
    }
  }
  .green {
    @media screen and (max-width: 989px) {
      padding: 0 15px;
    }
    .image {
      @media screen and (max-width: 1400px) {
        display: none;
      }
    }
    background-color: #45b29d;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    h2 {
      @media screen and (max-width: 749px) {
        font-size: 18px;
      }
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
    }

    p {
      @media screen and (max-width: 749px) {
        font-size: 12px;
      }
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 8px;
      color: #fff;
    }

    a {
      color: #c36054;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .blue {
    @media screen and (max-width: 989px) {
      padding: 0 15px;
    }
    background-color: #254151;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    h2 {
      @media screen and (max-width: 749px) {
        font-size: 18px;
      }
      text-align: center;
      text-transform: uppercase;
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
    }

    a {
      text-transform: uppercase;
      font-weight: 600;
      background-color: #fff;
      padding: 8px 32px;
      color: inherit;
      font-size: 14px;
      border-radius: 25px;
    }
  }
}

.projets {
  @media screen and (max-width: 749px) {
    padding: 32px 0;
  }
  padding: 64px;
  text-align: center;

  h2 {
    @media screen and (max-width: 749px) {
      font-size: 18px;
    }
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    color: #254151;
    margin-bottom: 12px;
  }

  a {
    font-weight: 600;
    background-color: #c36054;
    padding: 8px 32px;
    color: #fff;
    border-radius: 25px;
  }
}

.bglayer {
  @media screen and (max-width: 989px) {
    flex-direction: column;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    background-position: center 5%;
  }
  @media screen and (max-width: 749px) {
    background-blend-mode: normal;
    background-color: rgba(#c36054, 1);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 164px;
  background-color: rgba(#c36054, 0.8);
  background-image: url(/src/assets/bglayer.webp);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 10%;
  background-attachment: fixed;
  background-blend-mode: soft-light;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;

  a {
    text-transform: uppercase;
    font-weight: 600;
    background-color: #fff;
    padding: 8px 32px;
    color: #c36054;
    font-size: 14px;
    border-radius: 25px;
  }
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 400px;
  box-shadow: none;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
