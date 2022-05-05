const all = {
  namespaced: true,
  state: () => ({
    loading: false,
  }),
  mutations: {
    SAVE_LOADING(state, data) {
      state.loading = data;
    },
  },
  getters: {
    loading: (state) => state.loading,
  },
  actions: {
  },
};

export default all;
