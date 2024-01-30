<template>
	<div class="app">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component"></component>
			</keep-alive>
		</router-view>

		<!-- 判断tabbar组件是否需要隐藏 -->
		<Tabbar v-if="!route.meta.hideTabbar"></Tabbar>

		<!-- loading -->
		<Loading />
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import Tabbar from '@/components/tabbar/tabbar.vue';
	import Loading from '@/components/loading/loading.vue';

	// useRoute()：获取当前活跃的路由对象，是一个响应式对象
	let route = useRoute();
</script>

<style lang="less" scoped></style>
