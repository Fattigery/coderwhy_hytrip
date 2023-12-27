import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('../pages/Home.vue')
	}
];

const router = createRouter({
	routes,
	history: createWebHashHistory()
});

export default router;
