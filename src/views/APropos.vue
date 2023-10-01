<template>
  <section>
    <div
      class="story"
      style="padding: 8px 0 0"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div class="context">
        <h1>Notre Histoire</h1>
        <p>
          NOTRE HISTOIRE En 2012, un groupe d'amis, unis par leur profonde
          gratitude envers Dieu pour sa rédemption à travers Jésus-Christ, ainsi
          que pour ses bienfaits dans leurs vies, a ressenti l'appel de la
          vision missionnaire portée par l'Alliance Chrétienne et Missionnaire
          d'Albert Benjamin Simpson. Ils étaient passionnés par le désir ardent
          de contribuer activement à la réalisation de cette vision, conscients
          des nombreux besoins qui entravaient l'avancement de la mission.
          <br />
          Albert Benjamin Simpson lui-même, un pasteur canadien évangélique
          non-dénominationnel, avait consacré sa vie à propager l'Évangile à
          travers le monde. Sa conviction profonde dans la nécessité de répandre
          la Bonne Nouvelle de Jésus-Christ l'avait inspiré à fonder l'Alliance
          Chrétienne et Missionnaire. Il était animé par un amour inébranlable
          pour Jésus-Christ et une détermination sans faille à sauver les âmes
          perdues.
          <br />
          Ce groupe d'amis, également passionnés par la foi en Christ, a décidé
          de s'unir librement pour donner vie à cette vision missionnaire. Ils
          ont créé le groupe ABS (Les Amis de Benjamin Simpson).
          <br />
          En 2013 le groupe ABS a lancé ses activités. Très peu nombreux, ils
          ont commencé avec leur foi et le peu de moyens qu'ils pouvaient mettre
          en commun pour soulager les besoins de quelques champs missionnaires.
          <br />
          En 2022, soit près de 10 ans après la création du groupe,
          l'Association Chrétienne Missionnaire "les Amis de Benjamin Simpson a
          été officiellement créée, concrétisant l'engagement de ces frères et
          soeurs chrétiens en une organisation dédiée à la mission chrétienne.
        </p>
        <router-link to="/nous-rejoindre" class="btn">
          Agir à nos cotés
        </router-link>
      </div>
      <div class="illu"></div>
    </div>
    <div class="story complete">
      <div class="context">
        <h1>Notre Vision</h1>
        <p>
          L'association chrétienne missionnaire ABS aspire à devenir un
          instrument puissant entre les mains de Dieu, une source d'inspiration
          et de transformation, travaillant par le Saint-Esprit avec ferveur,
          pour contribuer à faire de chaque langue, chaque peuple, chaque tribu
          et chaque nation des disciples entièrement dévoués et consacrés de
          Jésus-Christ.
          <br />
          Notre ambition est de faire naître et grandir des églises locales et
          les accompagner jusqu’à une autonomie spirituelle, fonctionnelle et
          matérielle. Nous travaillons en collaboration avec les populations
          locales dans le respect des cultures, de l’environnement des pays et
          des peuples.
          <br />
          Dans cette quête, nous cherchons à guider les âmes vers une existence
          transcendante, une vie abondante en Jésus-Christ, s'épanouissant à la
          fois dans le domaine spirituel, physique et matériel. C'est une vision
          solennelle et exaltante qui guide chaque pas que nous faisons dans
          notre mission sacrée.
        </p>
      </div>
    </div>
    <div class="story">
      <div class="illu2"></div>
      <div class="context">
        <h1>Notre Mission</h1>
        <p>
          Notre mission est une quête de mobilisation, un appel à l'unité. Nous
          rassemblons tous les moyens, qu'ils soient humains, matériels,
          technologiques, financiers, ou spirituels, dans un élan collectif.
          Notre objectif est de propager la Vie abondante de Jésus-Christ, en
          contribuant à diffuser le message de l'Évangile comme une lumière dans
          les ténèbres. En même temps, nous nous engageons à répondre aux
          besoins spirituels, moraux, physiques, matériels et financiers de
          chaque individu en difficulté, sans distinction de race, de religion
          ou de croyance. Notre mission est un acte d'amour, une mission
          universelle de compassion et d'espoir.
        </p>
      </div>
    </div>
    <h2>L'equipe</h2>
    <p>
      Notre équipe est composée de personnes inspirées par une foi profonde,
      engagées à propager la lumière de l'espoir de Jésus-Christ dans le monde.
      Chacun apporte sa sagesse, son expertise et son dévouement pour
      concrétiser notre mission.
    </p>

    <div class="teams">
      <div class="member" v-for="i in 6" :key="i">
        <div class="cover">
          <img src="../assets/avatar.webp" alt="cover" />
        </div>
        <div class="contact">
          <h4>Directeur artistique</h4>
          <div class="title">
            Pamela <br />
            Laurent
          </div>
          <h4>
            <a href="mailto:infoabs@gmail.com">infoabs@gmail.com</a>
          </h4>
          <h4>
            <a href="tel:+2250707233418">(+225) 07 07 23 34 18</a>
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
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
section {
  @media screen and (max-width: 989px) {
    margin: 0;
    padding: 0 15px 64px;
  }
  display: block;
  background-color: #fff;
  min-height: calc(100vh - 69px - 292px);
  padding-bottom: 64px;
}

.story {
  @media screen and (max-width: 749px) {
    display: block;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &.complete {
    grid-template-columns: repeat(1, 1fr);
    background-image: url(../assets/pinkBG.webp);
    background-size: cover;
    background-repeat: no-repeat;

    & p {
      @media screen and (max-width: 749px) {
        width: 100%;
        padding: 0 15px;
      }
      width: 80%;
      max-width: none !important;
      font-size: 16px !important;
    }
  }

  .context {
    @media screen and (max-width: 989px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 749px) {
      padding: 0;
    }
    margin-bottom: 32px;
    h1 {
      margin-top: 32px;
      text-align: center;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 24px;
    }

    p {
      @media screen and (max-width: 989px) {
        text-align: center;
      }
      max-width: 460px;
      margin: auto;
      font-size: 15px;
      margin-bottom: 32px;
      font-weight: 500;
    }

    .btn {
      display: block;
      background-color: #2f2f2e;
      padding: 12px 16px;
      text-transform: uppercase;
      text-align: center;
      color: #fff;
      font-weight: 300;
      font-size: 12px;
      border: 1px solid #2f2f2e;
      border-radius: 50px;
      max-width: 164px;
      white-space: nowrap;
      margin: auto;
    }
  }

  .illu {
    @media screen and (max-width: 749px) {
      display: none;
    }
    background-image: url(../assets/benjamin.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .illu2 {
    @media screen and (max-width: 749px) {
      display: none;
    }
    min-height: 700px;
    background-image: url(../assets/worker.webp);
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: top;
  }
}

h2 {
  margin-top: 32px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 24px;
  color: #254151;
}

p {
  @media screen and (max-width: 989px) {
    max-width: none;
  }
  max-width: 50%;
  margin: auto;
  margin-bottom: 32px;
  font-weight: 500;
  text-align: center;
  color: #254151;
  margin-bottom: 24px;
}

.teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px;

  .member {
    @media screen and (max-width: 749px) {
      min-width: auto;
      width: 100%;
    }
    width: 45%;
    min-width: 448px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #eaeae8cc;

    .cover {
      @media screen and (max-width: 749px) {
        width: 100%;
      }
      width: 50%;
      max-height: 344px;
      img {
        width: 100%;
        max-height: 344px;
        object-fit: cover;
      }
    }

    .contact {
      @media screen and (max-width: 749px) {
        width: 100%;
        text-align: center;
      }
      padding: 15px;

      .title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 32px;
        color: #254151;
      }

      a,
      h4 {
        font-size: 14px;
        margin-bottom: 8px;
        color: #254151;
      }
    }
  }
}
</style>
