import axios from 'axios';

const defAPIHosts = process.env.VUE_APP_WALL_API;
console.log(defAPIHosts);
// const defAPIHosts = 'http://localhost:3000';

const userRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const postJson = (path, params, apiHost) => {
  if (apiHost === undefined) apiHost = defAPIHosts;
  if (params === undefined) params = {};
  const promise = userRequest.post(apiHost + path, params, {
    // withCredentials: true,
  });
  return promise;
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

export default {
  user: {
    query: (data) => getJson('/users'),
  },
  posts: {
    querys: (data) => postJson('/posts', data),
    query: (id) => getJson('/posts', id),
    create: (data) => postJson('/posts/create', data),
    deleteQuery: (id) => postJson('/posts', id),
    delete: () => postJson('/posts'),
    edit: (id) => postJson('/posts', id),
  },
};
