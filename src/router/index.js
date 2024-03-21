import { createRouter, createWebHashHistory } from 'vue-router';

// 路由映射关系表：path => component
const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('@views/home/home.vue')
	},
	{
		path: '/favor',
		component: () => import('@views/favor/favor.vue')
	},
	{
		path: '/order',
		component: () => import('@views/order/order.vue')
	},
	{
		path: '/message',
		component: () => import('@views/message/message.vue')
	},
	{
		path: '/city',
		component: () => import('@views/city/city.vue'),
		meta: {
			// 是否隐藏tabbar
			hideTabbar: true
		}
	},
	{
		path: '/search',
		component: () => import('@views/search/search.vue'),
		meta: {
			hideTabbar: true
		}
	},
	{
		path: '/detail/:id',
		component: () => import('@views/detail/detail.vue'),
		meta: {
			hideTabbar: true
		}
	}
];

const router = createRouter({
	routes,
	history: createWebHashHistory()
});

export default router;
