<template>
  <main>
    <Toast />
    <div class="container">
      <h1 data-aos="fade-up" data-aos-delay="300">Connectez-vous a nous</h1>
      <div class="content" data-aos="fade-up" data-aos-delay="800">
        <div class="left">
          <p>
            N'hésitez pas à nous contactant par téléphone ou en remplissant le
            formulaire ci-contre. Nous nous ferons une joie de vous répondre. A
            très vite.
          </p>
          <ul>
            <li>
              <IconPhone class="icon" />
              <a href="tel:+2250707233418">(+225) 07 07 23 34 18</a>
            </li>
            <li>
              <IconWorld class="icon" />
              <span> Abidjan- Cocody- Abatta Cité Synatrésor Villa 137 </span>
            </li>
            <li>
              <IconMail class="icon" />
              <a href="mailto:infoabs@gmail.com">infoabs@gmail.com</a>
            </li>
          </ul>
          <p>
            Vous pouvez également nous suivre sur les réseaux sociaux en
            cliquant sur les icônes logo.
          </p>
        </div>
        <form @submit.prevent="PostMessage">
          <div class="double">
            <input
              type="text"
              v-model="contact.nom"
              required
              placeholder="Nom"
              maxlength="50"
            />
            <input type="email" v-model="contact.email" placeholder="Email" />
          </div>
          <input
            type="text"
            v-model="contact.sujet"
            required
            placeholder="Sujet"
            maxlength="50"
          />
          <input
            type="tel"
            v-model="contact.phone"
            required
            placeholder="Telephone"
          />
          <textarea
            v-model="contact.message"
            cols="30"
            rows="5"
            required
            placeholder="Message"
            maxlength="1000"
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import IconWorld from "../components/icons/IconPosition.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconMail from "../components/icons/IconMail.vue";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const router = useRouter();

const contact = ref({
  nom: null,
  email: null,
  sujet: null,
  phone: null,
  message: null,
});

const PostMessage = () => {
  showSuccess();
  contact.value = {
    nom: null,
    email: null,
    sujet: null,
    phone: null,
    message: null,
  };
};
const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Contactez-Nous",
    detail: "Message envoyé avec succès",
    life: 3000,
  });
};

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
  margin: 48px 0 0;
}

.container {
  @media screen and (max-width: 989px) {
    width: 100%;
    padding: 0;
  }
  width: 70%;
  margin: auto;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 48px 0;
  .left {
    @media screen and (max-width: 749px) {
      width: 100%;
    }
    width: 48%;

    p {
      @media screen and (max-width: 749px) {
        width: 100%;
      }
      width: 90%;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 24px;
    }

    ul {
      margin-bottom: 36px;
      li {
        @media screen and (max-width: 749px) {
          width: 100%;
        }
        width: 70%;
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 12px;

        .icon {
          width: 18px;
          height: 18px;
          fill: #254151;
        }

        a,
        span {
          color: inherit;
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
  }
  form {
    @media screen and (max-width: 749px) {
      width: 100%;
    }
    width: 48%;
    text-align: center;

    .double {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      input {
        @media screen and (max-width: 749px) {
          width: 100%;
        }
        width: 48%;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 8px 16px;
      border: 0;
      border-bottom: 1px solid #b7c9d3;
      outline: none;
      margin-bottom: 12px;
      font-weight: 300;

      &:focus {
        border-color: #2f2f2e;
      }

      &::placeholder {
        @media screen and (max-width: 749px) {
          font-size: 12px;
        }
        font-weight: 300;
        font-size: 14px;
      }
    }

    button {
      color: #d55342;
      font-weight: 600;
      border: 0;
      outline: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>
