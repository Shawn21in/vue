import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
// 呼叫後端api用
app.config.globalProperties.$basetest = "http://localhost:8000/api/";
// 取得後端圖檔用
app.config.globalProperties.$urltest = "http://localhost:8000/";
app.use(store).use(router).mount("#app");
// createApp(App).use(store).use(router).mount("#app");
