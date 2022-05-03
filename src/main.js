import { createApp } from "vue/dist/vue.esm-bundler";
import 'vue3-lottie/dist/style.css'
import router from "./router";
import App from "./App.vue";

let app = createApp(App);
app.use(router);
app.mount("#app");
