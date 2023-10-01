<template>
  <main>
    <h1 data-aos="fade-up">Soutenez nous</h1>

    <div class="block" data-aos="fade-up" data-aos-delay="300">
      <div class="illustration">
        <img src="../assets/Pray.webp" alt="En priant" />
      </div>
      <div class="card">
        <h3>En priant</h3>
        <h4>
          PRIER POUR LA MISSION. UNE ACTION SIMPLE ET PUISSANTE À RÉALISER
          ENSEMBLE.
        </h4>
        <p>
          Une multitude de projets attendent d’être réalisés et de nombreux
          peuples sont encore dans le besoin. PAR LA FORCE DE NOS PRIÈRES,
          AIDONS LA MISSION À RAYONNER EN LAISSANT DIEU AGIR DANS LES CŒURS.
        </p>
      </div>
    </div>

    <div class="block" data-aos="fade-up" data-aos-delay="800">
      <div class="illustration">
        <img src="../assets/Bénévole.webp" alt="En vous engageant" />
      </div>
      <div class="card">
        <h3>En vous engageant</h3>
        <h4>Mettez votre don et votre talent au service de la mission.</h4>
        <p>
          Ensemble, nous pouvons accomplir des merveilles pour apporter un
          changement positif dans ce monde. Votre contribution compte, et votre
          impact sera immense. Inscrivez-vous dès maintenant et engagez-vous à
          faire une différence dans la vie des autres, tout en trouvant une
          source profonde de satisfaction et d'accomplissement personnel.
        </p>
      </div>
    </div>

    <div class="block" data-aos="fade-up">
      <div class="illustration">
        <img src="../assets/Give.webp" alt="En donnant" />
      </div>
      <div class="card">
        <h3>En donnant</h3>
        <h4>Votre don, c’est agir pour la vie !</h4>
        <p>
          L’Association Missionnaire ABS vit et se développe uniquement grâce à
          vous, donateurs de tous horizons, qui soutenez nos missionnaires par
          vos prières, votre engagement et vos dons. En donnant à notre
          association, vous offrez la possibilité aux peuples de plusieurs pays
          de connaître une vie différente, meilleure ; la vie nouvelle que
          propose l’Évangile.
        </p>
      </div>
    </div>
    <h2>Comment vous pouvez donner</h2>
    <div class="dons">
      <div class="don orange">
        <div class="top">
          <IconUser class="icon"></IconUser>
          <h4>En Personne</h4>
        </div>
        <p>Vous pouvez nous retrouver a l'adresse suivante:</p>
        <ul>
          <li>Abidjan- Cocody- Abatta</li>
          <li>Cité Synatresor</li>
          <li>Villa 137</li>
        </ul>
      </div>
      <div class="don yellow">
        <div class="top">
          <IconWorld class="icon"></IconWorld>
          <h4>En Ligne</h4>
        </div>
        <p>Vous pouvez donner en ligne en cliquant sur le bouton ci-dessous</p>
        <ul>
          <li>
            <router-link to="/dons" class="btn">Donner</router-link>
          </li>
        </ul>
      </div>
      <div class="don blue">
        <div class="top">
          <IconPhone class="icon"></IconPhone>
          <h4>Au Téléphone</h4>
        </div>
        <p>Vous pouvez nous appeler directement au numéros suivants:</p>
        <ul>
          <li>
            <a href="tel:+2250707233418">(+225) 07 07 23 34 18</a>
          </li>
          <li>
            <a href="tel:+2250546016512">(+225) 05 46 01 65 12</a>
          </li>
        </ul>
      </div>
      <div class="don green">
        <div class="top">
          <IconMail class="icon"></IconMail>
          <h4>Par Mail</h4>
        </div>
        <p>Vous pouvez nous laisser un message a l'adresse suivante:</p>
        <ul>
          <li>
            <a href="mailto:infoabs@gmail.com">infoabs@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import IconUser from "../components/icons/IconUser.vue";
import IconWorld from "../components/icons/IconWorld.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconMail from "../components/icons/IconMail.vue";
import AOS from "aos";

import { onMounted } from "vue";
import { useRouter } from "vue-router";

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
    width: 100%;
    margin: 0;
    padding: 0 15px;
  }
  background-color: #fff;
  min-height: calc(100vh - 69px - 292px);
  width: calc(100vw - 80px * 2);
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 700;
    color: #d55342;
    padding-top: 96px;
    letter-spacing: 3px;
    margin-bottom: 64px;
  }

  .block {
    @media screen and (max-width: 749px) {
      gap: 0;
      justify-content: space-between;
      flex-direction: column;
    }
    display: flex;
    justify-content: center;
    gap: 52px;
    margin-bottom: 32px;

    .illustration img {
      width: 100%;
    }

    .card {
      @media screen and (max-width: 989px) {
        width: 60%;
      }
      @media screen and (max-width: 749px) {
        width: 100%;
      }
      width: 40%;
      h3 {
        color: #254151;
        margin-bottom: 12px;
        font-weight: 700;
      }

      h4 {
        text-transform: uppercase;
        color: #d55342;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    color: #254151;
    padding-top: 64px;
    letter-spacing: 3px;
  }

  .dons {
    @media screen and (max-width: 989px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 749px) {
      grid-template-columns: repeat(1, 1fr);
    }
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .don {
      padding: 16px 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      height: 400px;

      .top {
        text-align: center;
      }

      .icon {
        max-width: 35px;
        max-height: 35px;
        opacity: 0.2;
      }

      h4 {
        font-weight: 600;
        font-size: 18px;
      }

      p,
      li,
      li a {
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        color: #fff;
      }
      ul {
        margin-top: 16px;

        .btn {
          display: block;
          background-color: #254151;
          padding: 16px 32px;
          text-transform: uppercase;
          color: #fff;
          font-weight: 600;
          border: 1px solid #254151;
          border-radius: 50px;
        }
      }
      &.orange {
        background-color: #d55342;
        color: #fff;
      }
      &.yellow {
        background-color: #f4ce50;
      }
      &.blue {
        background-color: #254151;
        color: #fff;
      }
      &.green {
        background-color: #45b29d;
        color: #fff;
      }
    }
  }
}
</style>
