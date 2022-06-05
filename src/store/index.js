import { createStore } from 'vuex';

import all from './all';
import posts from './posts';
import auth from './auth';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    all,
    auth,
  },
});
