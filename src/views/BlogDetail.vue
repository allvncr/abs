<template>
  <section>
    <div class="container">
      <header>
        <router-link to="/blog">Tous les posts</router-link>
        <div class="btn">Connexion/Inscription</div>
      </header>
      <div class="blog">
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
          <br />
          Notre mission est de faire de toute langue, tout peuple, toute tribu,
          toute nation des disciples fervents et de contribuer à leur bien-être
          spirituel, moral, physique, matériel et financier. Nous avons accompli
          des projets inspirants, touchant des vies à travers l'évangélisation,
          la construction de temples, la formation des missionnaires,
          l'amélioration des conditions de vie des populations défavorisées, et
          bien plus encore. Mais notre voyage ne fait que commencer. Nous
          croyons que les dix prochaines années seront remplies de nouvelles
          opportunités, de nouveaux défis et de nouveaux témoignages de
          transformation.
          <br />
          Réjoignez-nous pour célébrer cette décennie de dévouement et d'impact
          lors de notre cérémonie d'anniversaire le 28 Octobre 2023. Nous vous
          invitons également à suivre notre blog et nos réseaux sociaux pour
          rester informés sur nos activités, nos projets à venir et sur la
          manière dont vous pouvez vous impliquer.
          <br />
          Nous sommes profondément reconnaissants pour votre soutien continu,
          qui a fait de cette décennie un succès. En tant que membre de la
          famille ABS, vous êtes une partie essentielle de notre mission, et
          nous attendons avec impatience les années à venir, remplies de foi,
          d'espoir et d'accomplissements.
          <br />
          <br />
          Avec gratitude,
          <br />
          L'équipe de l'Association Missionnaire Chrétienne ABS
        </p>
        <div class="footer">
          <span>20 vues</span>
          <span>0 commentaire</span>
        </div>
      </div>
      <div class="blog">
        <h3>Commentaires</h3>
        <hr />
        <form @submit.prevent="PostComment">
          <input
            type="text"
            v-model="comment"
            placeholder="Rédigez un commentaire..."
            maxlength="200"
            required
          />
          <button type="submit" class="btn">Valider</button>
        </form>
        <div class="comments" v-if="comments.length">
          <div v-for="comment in comments" :key="comment" class="comment">
            <div class="header">
              <span class="icon"> P </span>
              <span>Patrick KOUADIO</span>
              <span>12 sept</span>
            </div>
            <p>
              {{ comment }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Fonction pour mettre à jour le titre de la page
const updatePageTitle = () => {
  document.title = router.currentRoute.value.meta.title;
};

const comment = ref(null);
const comments = ref([]);

const PostComment = () => {
  comments.value.unshift(comment.value);
  comment.value = null;
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
    padding: 15px 15px 64px;
  }
  display: block;
  background-color: #fff;
  min-height: calc(100vh - 69px - 292px);
  padding: 32px 0 64px;
}

.container {
  @media screen and (max-width: 989px) {
    width: 100%;
    padding: 0;
  }
  width: 70%;
  margin: auto;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
  }
  .btn {
    padding: 8px 12px;
    border: 1px solid #254151;
    font-size: 14px;
    font-weight: 300;
  }
}

.blog {
  @media screen and (max-width: 989px) {
    padding: 15px;
  }
  margin-top: 64px;
  border: 1px solid #b7c9d369;
  padding: 64px;
  color: inherit;

  h2 {
    @media screen and (max-width: 989px) {
      font-size: 24px;
    }
    text-transform: uppercase;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    @media screen and (max-width: 989px) {
      font-size: 14px;
    }
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 24px;

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

  hr {
    border: 1px solid #b7c9d369;
  }

  h3 {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  .footer {
    border-top: 1px solid #b7c9d369;
    padding: 15px 0;
    display: flex;
    gap: 16px;
    font-size: 12px;
    font-weight: 300;
  }

  form {
    display: flex;
    gap: 8px;
    margin-top: 32px;

    input {
      @media screen and (max-width: 749px) {
        padding: 12px 8px;
        font-size: 12px;
      }
      width: 100%;
      padding: 18px 24px;
      border: 1px solid #b7c9d369;
      outline: none;

      &:focus {
        border-color: #2f2f2e;
      }

      &::placeholder {
        @media screen and (max-width: 749px) {
          font-size: 12px;
        }
        font-weight: 300;
        font-size: 14px;
        color: #2f2f2e;
      }
    }

    .btn {
      @media screen and (max-width: 749px) {
        padding: 12px 8px;
        font-size: 12px;
      }
      padding: 18px 24px;
      border: 1px solid #b7c9d369;
      font-size: 14px;
      font-weight: 300;
      background-color: #254151;
      color: #fff;
      cursor: pointer;
    }
  }

  .comments {
    margin-top: 24px;
    border-top: 1px solid #b7c9d369;

    .comment {
      padding: 12px 0;
      border-bottom: 1px dotted #b7c9d369;
      margin: 0;
      .header {
        margin-bottom: 12px;
      }

      p {
        font-size: 14px;
        font-weight: 300;
        margin: 0;
      }
    }
  }
}
</style>
