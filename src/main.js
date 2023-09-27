import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

import "./assets/base.scss";

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

import "primeicons/primeicons.css";

import Sidebar from "primevue/sidebar";

const app = createApp(App);

app.component("Sidebar", Sidebar);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
