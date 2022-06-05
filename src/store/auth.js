import api from '@/js/api';
// import Swal from 'sweetalert2';
import errorHandle from '@/js/errorHandle';
// import handleErrorAsync from '@/js/handleErrorAsync';
// import appError from '@/js/appError';

const login = {
  namespaced: true,
  state: () => ({
    user: {
      token: '',
    },
    isLogin: false,
    token: '',
  }),
  mutations: {
    SAVE_AUTH(state, data) {
      state.user = data.user;
      localStorage.setItem('token', data.user.token);
    },
  },
  getters: {
    user: (state) => state.user,
  },
  actions: {
    async register({ commit }, data) {
      const result = await api.auth.register(data);
      console.log(result);
    },
    async login({ commit }, data) {
      return new Promise((resolve, reject) => {
        try {
          api.auth.login(data).then((res) => {
            console.log(res);
            if (res.status === 200) {
              commit('SAVE_AUTH', res.data);
            }
            resolve(res);
          }).catch((e) => {
            reject(e);
          });
        } catch (e) {
          errorHandle(e);
        }
      });
    },
    async getProfile({ commit }, data) {
      const result = await api.auth.profile(data);
      console.log(result);
    },
  },
};

export default login;
