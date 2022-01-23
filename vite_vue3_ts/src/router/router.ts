import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/login.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/pages/index.vue'),
      },
    ],
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('@/pages/other.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
console.log(routes, '1');
// 导出
export default router;
