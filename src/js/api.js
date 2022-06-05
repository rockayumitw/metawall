import axios from 'axios';
import handleErrorAsync from '@/js/handleErrorAsync';

const defAPIHosts = process.env.VUE_APP_WALL_API;

const request = axios.create({
  baseURL: process.env.VUE_APP_WALL_API,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 攔截 API request 的請求
request.interceptors.request.use((req) => {
  // API送出前可以做最後的處理
  console.log();
  req.headers.Authorization = '';
  return req;
}, (error) => {
  console.log();
  // 如果送出前失敗了，這邊就可以做一些處理
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  console.log();
  // 這邊可以對回來的資料先進行驗證處理，再來決定要不要把資料給吐出去
  return Promise.resolve(response);
}, (error) => {
  console.log(error);
  if (error.status === 400) {
    console.log('400 錯誤');
  }
  // 這邊當API發生錯誤的時候就可以處理 Error handling
  return Promise.reject(error.response);
});

const postJson = (path, params) => {
  if (params === undefined) params = {};
  const result = request.post(path, params);
  console.log(result);
  return result;
};

function getJson(path, params, apiHost) {
  if (apiHost === undefined) apiHost = defAPIHosts;
  if (params === undefined) params = {};
  const promise = axios.get(apiHost + path,
    {
      params,
    });
  return promise;
}

function patch(path, params, apiHost) {
  if (apiHost === undefined) apiHost = defAPIHosts;
  if (params === undefined) params = {};
  const promise = axios.get(apiHost + path,
    {
      params,
    });
  return promise;
}

function deleteFun(path, params, apiHost) {
  console.log(apiHost + path);
  if (apiHost === undefined) apiHost = defAPIHosts;
  if (params === undefined) params = {};
  const promise = axios.delete(apiHost + path);
  return promise;
}

export default {
  auth: {
    register: (data) => postJson('/users/sign_up'),
    login: (data) => postJson('/users/sign_in', data),
    profile: () => getJson('/users/profile'),
    updatePassword: (data) => postJson('/users/updatePaassword', data),
    editProfile: (data) => patch('/users/profile', data),
  },
  posts: {
    querys: (data) => postJson('/posts', data),
    query: (id) => getJson('/posts', id),
    create: (data) => postJson('/posts/create', data),
    deleteQuery: (id) => deleteFun(`/posts/${id}`),
    delete: () => postJson('/posts'),
    edit: (id) => patch(`/posts/${id}`),
  },
};
