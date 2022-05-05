import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue'),
  //   children: [
  //     {
  //       path: '/',
  //       name: 'Wall',
  //       component: () => import('../views/Page/Wall.vue'),
  //     },
  //     // 追蹤名單
  //     {
  //       path: '/user/:id/following',
  //       name: 'Follow',
  //       component: () => import('../views/Page/Following.vue'),
  //     },
  //     // 點讚的文章
  //     {
  //       path: '/user/:id/likes',
  //       name: 'Likes',
  //       component: () => import('../views/Page/Likes.vue'),
  //     },
  //     // 編輯個人資訊
  //     {
  //       path: '/user/:id/edit',
  //       name: 'Edit',
  //       component: () => import('../views/Page/Edit.vue'),
  //     },
  //     // 張貼文章
  //     {
  //       path: '/user/:id/posts',
  //       name: 'Post',
  //       component: () => import('../views/Page/Post.vue'),
  //     },
  //   ],
  // },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Page/Login.vue'),
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Page/Register.vue'),
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'Error',
  //   component: () => import('../views/Page/Error.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
