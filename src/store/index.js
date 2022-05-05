import { createStore } from 'vuex';

import all from './all';
import posts from './posts';

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
  },
});
