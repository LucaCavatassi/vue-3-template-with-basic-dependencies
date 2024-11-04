import { createApp } from 'vue';
import App from './App.vue';
import { router } from '../router';
// STYLE
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './style/general.scss';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Add all solid icons to the library
library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');