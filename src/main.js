import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './router';
import App from "./App.vue";

let app = createApp(App);
app.use(router);
app.mount("#app");
