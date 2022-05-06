import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';

import App from './App.vue';
import router from './router';
import store from './store';

import { dateFormat, ellipsis } from './js/filter';

import 'material-icons/iconfont/material-icons.css';
// eslint-disable-next-line import/extensions
import 'tw-elements/dist/js/index.min.js';
import './assets/app.scss';

const app = createApp(App);

app.config.globalProperties.$filters = {
  dateFormat,
  ellipsis,
};

app.use(VueLoading, {
  loader: 'dots',
});
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.mount('#app');
