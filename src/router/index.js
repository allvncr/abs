import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Accueil | asso chrétienne ABS",
      },
    },
    {
      path: "/a-propos",
      name: "A propos",
      component: () => import("../views/APropos.vue"),
      meta: {
        title: "A propos | asso chrétienne ABS",
      },
    },
    {
      path: "/nos-projets",
      name: "Nos projects",
      component: () => import("../views/NosProjets.vue"),
      meta: {
        title: "Nos projets | asso chrétienne ABS",
      },
    },
    {
      path: "/blog",
      name: "Actualités",
      component: () => import("../views/Blog.vue"),
      meta: {
        title: "Actualités | asso chrétienne ABS",
      },
    },
    {
      path: "/blog/:slug",
      name: "Post",
      component: () => import("../views/BlogDetail.vue"),
      meta: {
        title: "Post | asso chrétienne ABS",
      },
    },
    {
      path: "/nous-rejoindre",
      name: "Agir à nos cotés",
      component: () => import("../views/NousRejoindre.vue"),
      meta: {
        title: "Agir à nos cotés | asso chrétienne ABS",
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
      meta: {
        title: "Contact | asso chrétienne ABS",
      },
    },
    {
      path: "/dons",
      name: "Faire un don",
      component: () => import("../views/Dons.vue"),
      meta: {
        title: "Faire un don | asso chrétienne ABS",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Défilement vers le haut de la page
  next();
});

export default router;
