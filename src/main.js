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
import Galleria from "primevue/galleria";
import Image from "primevue/image";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.component("Sidebar", Sidebar);
app.component("Galleria", Galleria);
app.component("Image", Image);
app.component("Toast", Toast);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
