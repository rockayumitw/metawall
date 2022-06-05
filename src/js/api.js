import axios from 'axios';

const defAPIHosts = process.env.VUE_APP_WALL_API;

const request = axios.create({
  baseURL: process.env.VUE_APP_WALL_API,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 攔截 API request 的請求
request.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token != null) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  console.log();
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  console.log();
  return Promise.resolve(response);
}, (error) => {
  console.log(error);
  if (error.status === 400) {
    console.log('400 錯誤');
  }
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
