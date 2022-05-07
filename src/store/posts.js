import Swal from 'sweetalert2';
import api from '../js/api';

// icon: warning, sucess, danger?
// Swal.fire('title', 'content', 'icon');

const posts = {
  namespaced: true,
  state: () => ({
    querys: [],
  }),
  mutations: {
    SAVE_QUERYS(state, data) {
      state.querys = data;
    },
  },
  getters: {
    querys: (state) => state.querys,
  },
  actions: {
    // 撈取所有資料
    async getQuerys({ commit }, data) {
      try {
        commit('all/SAVE_LOADING', true, { root: true });
        const result = await api.posts.querys(data);
        if (result.status === 200) {
          await commit('SAVE_QUERYS', result.data.data);
          commit('all/SAVE_LOADING', false, { root: true });
        } else {
          Swal.fire('error', result.data.message, 'error');
          commit('all/SAVE_LOADING', false, { root: true });
        }
      } catch (err) {
        console.log(err);
        Swal.fire('error', err.message, 'error');
        commit('all/SAVE_LOADING', false, { root: true });
      }
    },
    // 撈取單資料, 查詢、模糊查詢
    async getQuery({ commit }, data) {
      try {
        commit('all/SAVE_LOADING', true, { root: true });
        const result = await api.posts.querys(data);
        if (result.status === 200) {
          await commit('SAVE_ARTICLE_QUERYS', result.data.data);
          commit('all/SAVE_LOADING', false, { root: true });
        } else {
          Swal.fire('error', result.data.message, 'error');
          commit('all/SAVE_LOADING', false, { root: true });
        }
      } catch (err) {
        console.log(err);
        Swal.fire('error', err.message, 'error');
        commit('all/SAVE_LOADING', false, { root: true });
      }
    },
    // 新增文章
    async create({ state, commit, dispatch }, paylod) {
      return new Promise((resolve, reject) => {
        commit('all/SAVE_LOADING', true, { root: true });
        try {
          api.posts.create(paylod).then((res) => {
            resolve(res);
            commit('all/SAVE_LOADING', false, { root: true });
          }).catch(async (err) => {
            reject(err);
            commit('all/SAVE_LOADING', false, { root: true });
          });
        } catch (err) {
          commit('all/SAVE_LOADING', false, { root: true });
          Swal.fire(err.message, '', 'error');
        }
      });
    },
    // 編輯單一篇文章
    async edit() {
      console.log('編輯文章');
    },
    // 刪除一篇文章
    async deleteQuery() {
      console.log('編輯文章');
    },
  },
};

export default posts;
