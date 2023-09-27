<template>
  <div class="header">
    <router-link to="/">
      <Logo class="logo"></Logo>
    </router-link>
    <ul class="links">
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/a-propos">A propos</router-link>
      </li>
      <li>
        <router-link to="/nos-projets">Nos projects</router-link>
      </li>
      <li>
        <router-link to="/blog">Actualités</router-link>
      </li>
      <li>
        <router-link to="/nous-rejoindre">Agir à nos cotés</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="pinnedTopRight">
      <router-link to="/dons">Faire un don</router-link>
    </div>
    <div class="bars">
      <span class="pi pi-bars" @click="visibleRight = true"></span>
    </div>
    <Sidebar v-model:visible="visibleRight" position="right">
      <ul class="menuLinks">
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/a-propos">A propos</router-link>
        </li>
        <li>
          <router-link to="/nos-projets">Nos projects</router-link>
        </li>
        <li>
          <router-link to="/blog">Actualités</router-link>
        </li>
        <li>
          <router-link to="/nous-rejoindre">Agir à nos cotés</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Logo from "./icons/logo.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const visibleRight = ref(false);

watch(route, () => {
  visibleRight.value = false;
});
</script>

<style lang="scss" scoped>
.header {
  @media screen and (max-width: 989px) {
    padding: 0 15px;
  }
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #254151;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    @media screen and (max-width: 989px) {
      position: relative;
      top: 20px;
      left: 0;
    }
    position: absolute;
    left: 44px;
    top: -20px;
  }

  .links {
    @media screen and (max-width: 989px) {
      display: none;
    }
    display: flex;
    gap: 4px;
    list-style: none;

    li a {
      color: inherit;
      text-decoration: none;
      padding: 0 12px;
      transition: color 0.4s ease 0s;

      &:hover {
        color: #d55342;
      }

      &.router-link-active {
        color: #d55342;
      }
    }
  }

  .pinnedTopRight {
    @media screen and (max-width: 989px) {
      display: none;
    }
    a {
      display: block;
      text-decoration: none;
      color: #254151;
      white-space: nowrap;
      transition: all 0.4s ease 0s;
      text-transform: uppercase;
      background-color: #f4ce50;
      padding: 20px 4px;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 3px;

      &:hover {
        color: #fff;
        background-color: #d55342;
      }
    }
  }

  .bars {
    @media screen and (max-width: 989px) {
      display: block;
    }
    display: none;

    span {
      font-size: 32px;
    }
  }
}

.menuLinks {
  li {
    a {
      padding: 12px 20px;
      text-align: center;
      display: block;
      width: 100%;
      color: inherit;

      &:hover {
        color: #fff;
        background-color: #254151;
      }
    }

    .router-link-active {
      color: #000;
      background-color: #f4ce50;
    }
  }
}
</style>
