import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
// App.use(router);
// const app = createApp(App);
// app.use(router);
// app.mount('#app');
createApp(App).use(router).mount('#app');
