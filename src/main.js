import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import { createI18n } from "vue-i18n";

import Notifications from "@kyvg/vue3-notification";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import en from "@/assets/i18n/en";
import ar from "@/assets/i18n/ar";
const lang = localStorage.getItem("lang") || "en";
axios.defaults.headers["Accept-Language"] = lang;

document.documentElement.lang = lang;

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en: en,
    ar: ar,
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyBDYau-MpUQMlJspXnOYTQzGpQX_PFJQQ4",
  authDomain: "silky-systems-f08a1.firebaseapp.com",
  projectId: "silky-systems-f08a1",
  storageBucket: "silky-systems-f08a1.appspot.com",
  messagingSenderId: "405546559830",
  appId: "1:405546559830:web:c3972248c883a008a48ef7",
};
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(Notifications)
  .mount("#app");
